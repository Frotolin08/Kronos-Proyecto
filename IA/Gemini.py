#pip install -r IA/requirements.txt
from google import genai
from dotenv import load_dotenv
import os


env_path = "ApiKey.env"
load_dotenv(dotenv_path='IA/ApiKey.env')

API_KEY = os.getenv('API_KEY')

client = genai.Client(api_key= API_KEY)

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Explain how AI works in a few words",
)

print(response)