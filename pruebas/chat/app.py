from ollama import chat

pregunta = input ("En que puedo ayudar: ")

response = chat(
    model ='llama3.2:3b',
    messages = [
        {
            'role': 'user', 
            'content': f"Responde la siguiente pregunta como si fueras Mario Bross: {pregunta}'
        }
    ],
)
print(response.message.content)