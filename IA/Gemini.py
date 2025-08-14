# pip install -r IA/requirements.txt
import os
from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO
from pydantic import BaseModel
import pandas as pd
from typing import List
import base64

client = genai.Client(api_key="")

#modelo para la tabla JSON
class Board(BaseModel):
    columns: List[str]
    rows: List[List[str]]

    SAVE_DIR = "tablas_generadas"
    os.makedirs(SAVE_DIR, exist_ok=True)


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
        contents=prompt,
        config={
            "response_mime_type": "application/json",
            "response_schema": Board
        },
    )
    print("JSON crudo:\n", response.text)
    board: Board = response.parsed
    df = pd.DataFrame(board.rows, columns=board.columns)
    
    csv_path = os.path.join(SAVE_DIR,"tablita.csv")
    df.to_csv(csv_path, index=False)

createJson("haz una tabla analizando Tipografía, Colores, Formal o informal, Personajes, iconos o emblemas, Accesibilidad, Capacidad de navegación, Organización (donde pone botones importantes), Funciones extras y Tutoriales o instrucciones de las paginas web de MELI, amazon y pedido ya")
