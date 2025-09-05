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

client = genai.Client(api_key="AIzaSyAkiW5YQ7ONHn8i4qadg0KTzXRPRfy3r3E")


#modelo de la tabla
class Board(BaseModel):
    columns: List[str]
    rows: List[List[str]]

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
    response_search = client.models.generate_content(
        model="gemini-2.5-flash",
        contents="Crea un prompt en base a tu función de busqueda en internet para poder conseguir información acerca del siguiente prompt y darselo a otra IA generadora de tablas " + prompt,
        config=types.GenerateContentConfig(
            tools=[grounding_tool]
        )
    )

    prompt_board = response_search.text

    with open(img_path, "rb") as f:
        inserted_img = f.read()

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
            "response_schema": Board
        },
    )

    board: Board = response.parsed
    board_dict = {
        "columns": board.columns,
        "rows": board.rows
    }

    # Guardar JSON
    json_path = os.path.join(SAVE_DIR, "tablita.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(board_dict, f, ensure_ascii=False, indent=4)
    print("JSON creado")

    with open("tablas_generadas/tablita.json", "r", encoding="utf-8") as f:
        data = json.load(f)

    print(tabulate(data["rows"], headers=data["columns"], tablefmt="grid"))

    # Guardar Excel
    df = pd.DataFrame(board.rows, columns=board.columns)
    xlsx_path = os.path.join(SAVE_DIR, "tablita.xlsx")
    df.to_excel(xlsx_path, index=False)
    print("Excel creado")


    #por si cambiamos de lugar las filas y columnas 
    conclusion = None
    if "Conclusion:" in df.columns:
        conclusion = " ".join(df["Conclusion:"].dropna().tolist())
    else:
        conclusion = " ".join(df.iloc[-1].dropna().tolist())

    print("Conclusión detectada:", conclusion)

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

#crear img buscando en internet
def createImgSearching(prompt):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=(
            "Eres un generador de prompts para IAs de imagen. "
            "Investiga en internet detalles útiles (época, vestimenta, entorno, referencias visuales) "
            "y devuelve UN solo prompt en español, ultra descriptivo, con estilo, iluminación, cámara, "
            "encuadre y paleta, sin texto ni marcas de agua. "
            f"Tema: {prompt}"
        ),
        config = types.GenerateContentConfig(
            tools=[grounding_tool]
        )
    )
    print(response.text)

    prompt_img = response.text

    # Generar img
    response_img = client.models.generate_content(
        model="gemini-2.0-flash-preview-image-generation",
        contents=[
            {"role": "user", "parts": [{"text": prompt_img}]}
        ],
        config=types.GenerateContentConfig(
        response_modalities=['TEXT', 'IMAGE']
        )
    )
    for part in response_img.candidates[0].content.parts:
        if part.text is not None:
            print(part.text)
        elif part.inline_data is not None:
            image = Image.open(BytesIO((part.inline_data.data)))
            image.save('gemini-image.png', overwrite= True)
            image.show()


#createJson("Generate a comparison table with the following exact columns: Website, Typography, Colors, "
#"Formal vs. Informal, Characters / Icons / Emblems, Accessibility, Navigation (important buttons), Organization, "
#"Extra features, Tutorials or Instructions, Conclusion. The table must include rows for Mercado Libre, Amazon, PedidoYa, "
#"and the website shown in the provided image. There should be exactly 10 rows in total (one per topic/criterion). Each row "
#"must have 5 cells (4 websites + 1 Conclusion). Each cell must contain a descriptive sentence of 15–20 words. In the Conclusion "
#"column, write specific improvement suggestions only for the last website (the one from the image). Do NOT compare it directly with Mercado Libre, "
#"Amazon, or PedidoYa, but detect with things should it improve (without mentioning the others websites). Avoid starting sentences with ML, Amazon, and "
#"PedidoYa…. Just state clearly what could be improved in the last site. Output must be structured, consistent, and in JSON schema format. Write "
#"correctly the words ant letters, not just simbols.")

#createTxt("como son los diseños de las páginas web de mercado libre, pedido ya y amazon? hazme una descripción teniendo en cuenta: Sitio Web, Tipografía, Colores, Formal o informal, Personajes-iconos-emblemas, Accesibilidad, Capacidad de navegación, Organización (botones importantes), Funciones extras, Tutoriales o instrucciones")

createImgSearching("Crea una img de un chico de 16 años, de piel muuuy blanca y tomando mate. debe estar en uruguay, y tener una camiseta del país")

#createImg("create an image of a happy dog jumping on the grass")