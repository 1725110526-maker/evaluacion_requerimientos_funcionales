import ollama
requerimiento = "El usuario ingresa su email y contrasena y el sistema autentica los datos"


response = ollama.systemone(
    model ='d1-omni:600m',
    state = requerimiento,
    questions = {
        "condicion":{
            "type":"noul",
            "instructions":"Incluye una situacion que detona el evento?",
            "criteria":{
                "true": "Especifica claramente el evento o situacion",
                "false": "No menciona que situacion dispara la accion"
            }
        }

    },
)
condicion = response.answers['condicion'].noul

if condicion >= 0.05:
    print(f"1.Cumple con la condicion : {condicion}")
else :
    print(f"1.No cumple esta condicion: {condicion}")




