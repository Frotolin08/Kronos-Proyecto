# pip install -r lib.txt
import os
import json
from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO
from pydantic import BaseModel
from typing import List
import base64
import pandas as pd
import datetime
from tabulate import tabulate
import json
import time
import random

client = genai.Client(api_key="AIzaSyAkiW5YQ7ONHn8i4qadg0KTzXRPRfy3r3E")


#modelo de la tabla
class WebsiteValue(BaseModel):
    name: str
    description: str

class TableRow(BaseModel):
    criterion_or_website: str
    websites: List[WebsiteValue]
    conclusion: str = None

class TableData(BaseModel):
    table_data: List[TableRow]

SAVE_DIR = "tablas_generadas"
os.makedirs(SAVE_DIR, exist_ok=True)


#ingreso de img
with open('image.jpg','rb') as f:
    inserted_img = f.read()

#acceso a buscar en google
grounding_tool = types.Tool(
    google_search=types.GoogleSearch()
)


#ERROR
def retry_request(func, *args, **kwargs):
    max_retries = 5
    delay = 2
    for attempt in range(max_retries):
        try:
            return func(*args, **kwargs)
        except genai.errors.ServerError as e:
            if "503" in str(e) and attempt < max_retries - 1:
                sleep_time = delay * (2 ** attempt) + random.uniform(0, 1)
                print(f"Server sobrecargado (503). Retrying in {sleep_time:.1f} seconds...")
                time.sleep(sleep_time)
            else:
                raise


#crear texto
def createTxt(prompt):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
        config = types.GenerateContentConfig(
            tools=[grounding_tool]
        )
    )
    print(response.text)


#crear tabla e img buscando en internet
def createJson(prompt, img_path="image.jpg"):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=(
            "Crea un prompt en base a tu función de busqueda en internet para poder conseguir información acerca del siguiente prompt y darselo a otra IA generadora de tablas " + prompt
        ),
        config = types.GenerateContentConfig(
            tools=[grounding_tool]
        )
    )
    print("Response de tabla hecho")

    prompt_board = response.text

    with open(img_path, "rb") as f:
        inserted_img = f.read()

#hacer tablita
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=[
            prompt_board,
            types.Part.from_bytes(
                data=inserted_img,
                mime_type='image/jpeg'
            )
        ],
        config={
            "response_mime_type": "application/json",
            "response_schema": TableData
        },
    )


#ajustar los datos a las filas y columnas
    rows = []
    for row in response.parsed.table_data:
        row_dict = row.model_dump()
        websites_raw = row_dict.get("websites", [])
        websites_dict = {w["name"]: w["description"] for w in websites_raw}
        row_dict.pop("websites", None)
        row_dict.update(websites_dict)
        rows.append(row_dict)

    df = pd.DataFrame(rows)    

    # Guardar JSON
    json_path = os.path.join(SAVE_DIR, "tablita.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(rows, f, ensure_ascii=False, indent=4)
    print("JSON creado")

    with open("tablas_generadas/tablita.json", "r", encoding="utf-8") as f:
        data = json.load(f)

    print("tabla guardada")

    # Guardar Excel
    xlsx_path = os.path.join(SAVE_DIR, "tablita.xlsx")
    df.to_excel(xlsx_path, index=False)
    print("Excel creado")

    #por si cambiamos de lugar las filas y columnas 
    conclusion = None
    if "conclusion" in df.columns:
        conclusion = " ".join(df["conclusion"].dropna().tolist())
    else:
        conclusion = " ".join(df.iloc[-1].dropna().tolist())

    print("Conclusión de tabla hecha")

    if conclusion:
        createImgSearching(conclusion, img_path)



#crear img
def createImg(prompt):
    response = client.models.generate_content(
        model="gemini-2.0-flash-preview-image-generation",
        contents=[
            {"role": "user", "parts": [{"text": prompt}]}
        ],
        config=types.GenerateContentConfig(
        response_modalities=['TEXT', 'IMAGE']
        )
    )
    for part in response.candidates[0].content.parts:
        if part.text is not None:
            print(part.text)
        elif part.inline_data is not None:
            image = Image.open(BytesIO((part.inline_data.data)))
            image.save('gemini-image.png', overwrite= True)
            image.show()

#crear img buscando en internet (con texto + img opcional)
def createImgSearching(prompt, img_path=None):
    contents = [
        {"role": "user", "parts": [{"text": (
           " Crea una imagen realista del sitio web mostrado en la imagen adjunta, incorporando las mejoras indicadas en la conclusión:"
            "- Ajustar colores y tipografía para mejor legibilidad."
            "- Reorganizar botones importantes para navegación más intuitiva."
            "- Añadir iconos y elementos visuales que mejoren la experiencia."
            "- Mantener el estilo general del sitio original."
            "No inventes nuevos elementos, solo mejora lo que ya existe. La imagen debe mostrar claramente los cambios sugeridos. Mantiene las dimensiones de la img original"
            f"Tema: {prompt}"
        )}]}
    ]

    # si viene img, se añade al contents (input)
    if img_path and os.path.exists(img_path):
        with open(img_path, "rb") as f:
            inserted_img = f.read()
        contents[0]["parts"].append(
            types.Part.from_bytes(data=inserted_img, mime_type="image/jpeg")
        )

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=contents,
        config=types.GenerateContentConfig(
            tools=[grounding_tool]
        )
    )
    print("Response de img hecho")

    prompt_img = response.text

    # Generar img final
    response_img = client.models.generate_content(
        model="gemini-2.0-flash-preview-image-generation",
        contents=[{"role": "user", "parts": [{"text": prompt_img}]}],
        config=types.GenerateContentConfig(
            response_modalities=["TEXT", "IMAGE"]
        )
    )

    print(response_img)

    if response_img.candidates and response_img.candidates[0].content:
        for part in response_img.candidates[0].content.parts:
            if part.text is not None:
                print(part.text)
            elif part.inline_data is not None:
                image = Image.open(BytesIO(part.inline_data.data))
                image.save("gemini-image.png", overwrite=True)
                image.show()
    else:
        print("No se generó ninguna imagen para este prompt.")




createJson("""Generate a comparison table with 9 rows (criteria) and 5 columns: 3 widely used websites relevant to the topic (you choose), the website from the image, and a Conclusion.

Columns:
- Criterion
- Website 1 (name + brief 5–7 word description)
- Website 2
- Website 3
- Website from image
- Conclusion

Criteria in this exact order: Typography, Colors, Formal vs. Informal, Characters/Icons/Emblems, Accessibility, Navigation (important buttons), Organization, Extra features, Tutorials/Instructions.

Content rules:
- Each cell (except Criterion) must be a single descriptive sentence, 20–30 words long.
- The Conclusion column must give 2–3 specific, actionable improvements only for the image website, in complete sentences, without mentioning other sites.

""")

#createTxt("como son los diseños de las páginas web de mercado libre, pedido ya y amazon? hazme una descripción teniendo en cuenta: Sitio Web, Tipografía, Colores, Formal o informal, Personajes-iconos-emblemas, Accesibilidad, Capacidad de navegación, Organización (botones importantes), Funciones extras, Tutoriales o instrucciones")

#createImgSearching("Crea una img de un chico de 16 años, de piel muuuy blanca y tomando mate. debe estar en uruguay, y tener una camiseta del país")

#createImg("")