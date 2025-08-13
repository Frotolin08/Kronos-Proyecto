#pip install -r IA/requirements.txt
from google import genai
from google.genai import types
from dotenv import load_dotenv
import os

load_dotenv(dotenv_path='./.env')
API_KEY = os.getenv('API_KEY')

client = genai.Client(api_key= API_KEY)

response = client.models.generate_content(
    model="gemini-2.5-flash",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_budget=0)
    ),
    contents="quien es julieta weber?",
)

print(response.text)