async function evaluacion() {
    try{
        const uri = "http://localhost:11434/v1/systemone";
        const requerimiento = "El usuario ingresa su emaul y contrasena, y el sistema contesta";
        const data = {
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
        }

        const response = await fetch(
            uri,
            {
                method:"POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const resultado = await response.json();

        console.log("Conexion con la API existosa: ", resultado);
        console.log("Criterio: ", resultado.answers.criterio.noul);
    }catch (error){
        console.log("Ups algo fallo: ", error.messaje);
    }
}