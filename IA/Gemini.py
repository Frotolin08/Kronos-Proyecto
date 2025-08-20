# pip install -r IA/requirements.txt
import os
import json
from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO
from pydantic import BaseModel
from typing import List
import base64

client = genai.Client(api_key="")

#modelo de la tabla
class Board(BaseModel):
    columns: List[str]
    rows: List[List[str]]

SAVE_DIR = "tablas_generadas"
os.makedirs(SAVE_DIR, exist_ok=True)

#ingreso de img
with open('image.jpg','rb') as f:
    inserted_img = f.read()

def createTxt(prompt):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
        config=types.GenerateContentConfig(
            thinking_config=types.ThinkingConfig(thinking_budget=0)
        )
    )
    print(response.text)

def createImg(prompt):
    response = client.models.generate_content(
        model="gemini-2.0-flash-preview-image-generation",
        contents=prompt,
        config=types.GenerateContentConfig(
            response_modalities=['IMAGE']
        )
    )
    for part in response.candidates[0].content.parts:
        if hasattr(part, "text") and part.text is not None:
            print(part.text)
        elif hasattr(part, "inline_data") and part.inline_data is not None:
            image_data = base64.b64decode(part.inline_data.data)
            image = Image.open(BytesIO(image_data))
            image.save('gemini-native-image.png')
            image.show()

def createJson(prompt):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=[
            prompt,
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

createJson(
    "Genera una tabla JSON con exactamente las siguientes columnas: Sitio Web, Tipografía, Colores, Formal o informal, Personajes-iconos-emblemas, Accesibilidad, Capacidad de navegación, Organización (botones importantes), Funciones extras, Tutoriales o instrucciones. Incluye una fila para Mercado Libre, una para Amazon, una para PedidoYa y otra para lo que puedes analizar de la img que te pase en el content. Asegúrate de que cada fila tenga exactamente 11 valores (contando el nombre), uno por cada columna. Cada tabla debe ser descriptiva y desarrollada, teniendo aprox 10 palabras"
)
