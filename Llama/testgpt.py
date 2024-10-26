import requests

# static variable 

def ask_llama(prompt):
    response = requests.post(
        "https://e747-34-91-139-161.ngrok-free.app/generate",
        json={"prompt": prompt}
    )
    return response.json()['response']

# Usage
print(ask_llama("Hello, how are you?"))

