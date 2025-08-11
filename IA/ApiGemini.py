#pip install -r requirements.txt
from google import genai
from dotenv import load_dotenv
import os

load_dotenv(dotenv_path='IA/ApiKey.env')

API_KEY = os.getenv('API_KEY')

client = genai.Client(api_key= API_KEY)
response = client.models.generate_content(
    model="gemini-2.5-flash", contents="Cual es el país con más habitantes del mundo"
)

print(response.text)