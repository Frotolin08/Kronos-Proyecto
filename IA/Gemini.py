# pip install -r IA/lib.txt
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

def createTxt(prompt):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
        config = types.GenerateContentConfig(
            tools=[grounding_tool]
        )
    )
    print(response.text)
    

def createImg(prompt):
    response = client.models.generate_content(
        model="gemini-2.0-flash-preview-image-generation",
        contents=(prompt),
        config=types.GenerateContentConfig(
        response_modalities=['TEXT', 'IMAGE']
        )
    )
    for part in response.candidates[0].content.parts:
        if part.text is not None:
            print(part.text)
        elif part.inline_data is not None:
            image = Image.open(BytesIO((part.inline_data.data)))
            image.save('gemini-image.png')
            image.show()

def createImgSearching(prompt):
    response_search = client.models.generate_content(
        model="gemini-2.5-flash",
        contents="Actua como un prompt engineer y creame un prompt en ingles buscando en internet datos. Para generar la mejor imagen sobre esto: " + prompt,
        config=types.GenerateContentConfig(
            tools=[grounding_tool]
        )
    )
    prompt_img = response_search.text

    response_img = client.models.generate_content(
        model="gemini-2.0-flash-preview-image-generation",
        contents=(prompt_img),
        config=types.GenerateContentConfig(
        response_modalities=['TEXT', 'IMAGE']
        )
    )
    for part in response_img.candidates[0].content.parts:
        if part.text is not None:
            print(part.text)
        elif part.inline_data is not None:
            image = Image.open(BytesIO((part.inline_data.data)))
            image.save('gemini-image.png')
            image.show()


def createJson(prompt):
    response_search = client.models.generate_content(
        model="gemini-2.5-flash",
        contents="Crea un prompt en base a tu función de busqueda en internet para poder conseguir información acerca del siguiente prompt y darselo a otra IA generadora de tablas" + prompt,
        config=types.GenerateContentConfig(
            tools=[grounding_tool]
        )
    )

    prompt_board = response_search.text

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

    json_path = os.path.join(SAVE_DIR, "tablita.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(board_dict, f, ensure_ascii=False, indent=4)
    print("json creado")

    df = pd.DataFrame(board.rows, columns=board.columns)
    xlsx_path = os.path.join(
    SAVE_DIR,
    f"tablita_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}.xlsx"
    )
    df.to_excel(xlsx_path, index=False)
    print("excel creado")

createJson(
    "Genera una tabla con exactamente las siguientes columnas: Sitio Web, Tipografía, Colores, Formal o informal, Personajes-iconos-emblemas, Accesibilidad, Capacidad de navegación, Organización (botones importantes), Funciones extras, Tutoriales o instrucciones. Incluye una fila para Mercado Libre, una para Amazon, una para PedidoYa y otra para todo lo que puedes analizar de la img que te pase en el content. Asegúrate de que hayan 10 filas, uno por cada columna. cada fila tendrá 5 columnas (4 para cada uno de los nombres de las páginas) y la última será con topico de Conclusion:. En este pondras que puedes observar que funciona bien en las primeras 3 páginas, y dirás que se puede mejorar de la que te pasé con la img. Debes poner conclusiones especificas por cada topico, no una general. Cada tabla debe ser descriptiva y desarrollada, teniendo aprox 15-20 palabras. No deber arrancar la conclusión poniendo ML, AMAZAZON Y ... hacen esto.. simplemente pon que debería mejorar la última img de un sitio no oficial"
)

#createTxt("como son los diseños de las páginas web de mercado libre, pedido ya y amazon? hazme una descripción teniendo en cuenta: Sitio Web, Tipografía, Colores, Formal o informal, Personajes-iconos-emblemas, Accesibilidad, Capacidad de navegación, Organización (botones importantes), Funciones extras, Tutoriales o instrucciones")

#createImgSearching("como son los diseños de las páginas web de mercado libre, pedido ya y amazon? hazme una descripción teniendo en cuenta: Sitio Web, Tipografía, Colores, Formal o informal, Personajes-iconos-emblemas, Accesibilidad, Capacidad de navegación, Organización (botones importantes), Funciones extras, Tutoriales o instrucciones")

#createImg("create an image of a happy dog jumping on the grass")