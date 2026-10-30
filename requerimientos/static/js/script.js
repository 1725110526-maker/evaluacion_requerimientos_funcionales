async function evaluacionn(){
    try{
        const uri="https://vigilant-space-acorn-qv4vqwxx7g4h54r-11434.app.github.dev/v1/systemone";
        const requerimientos="El administrador elige una fecha y hora al agendar o reagendar una cita, el modulo de cias debe comprobar que no exista otra cita en ese horario en la base de datos en la tabla citas inpidiendo guardar citas que se empalmen mostrando un mensaje de horario ocupado";
        const data={
            model: "d1-omni:600m",
            state: requerimientos,
            questions: {
                condicion: {
                    type: "noul",
                    instructions: "¿Incluye una situacion que detone el evento?",
                    criteria: {
                        true: "Especifica claramente el evento o situación claramente",
                        false: "No menciona qué situación dispara la acción"
                    }
                }
            }
        }
        const response = await fetch(
            uri,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data)
            }
        );
        const resultado=await response.json();
        const condicion=resultado.answers.condicion.noul;
        console.log("Conexion con la API exitosa: ",resultado);
        console.log("condicion: ",condicion)
    } catch(error){
        console.log("ups algo fallo",error.message);
        throw error;
    }
}