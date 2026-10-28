async function evaluacion() {
    try {
        const uri = "https://vigilant-space-acorn-qv4vqwxx7g4h54r-11434.app.github.dev/v1/systemone";
        const requerimiento = "El usuario ingresa su email y contrasena, y el sistema contesta";

        const data = {
            model: 'd1-omni:600m',
            state: requerimiento,
            questions: {
                "condicion": {
                    "type": "noul",
                    "instructions": "Incluye una situacion que detona el evento?",
                    "criteria": {
                        "true": "Especifica claramente el evento o situacion",
                        "false": "No menciona que situacion dispara la accion"
                    }
                }
            }
        };

        const response = await fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const resultado = await response.json();

        console.log("Conexion con la API exitosa: ", resultado);


        const mostrar = document.getElementById("mostrar");
        if (mostrar) {
            mostrar.textContent = JSON.stringify(resultado);
        }

    } catch (error) {
        console.log("Ups algo fallo: ", error.message);
        throw error;
    }
}