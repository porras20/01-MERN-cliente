import { useState } from "react";

export const NuevoProyecto = () => {

     //State para proyecto
     const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    //Extraer nombre del proyecto

    const {nombre} = proyecto

    // Lee los contenidos del input
    const onChangeProyecto = e => {
        setProyecto({...proyecto, [e.target.name] : e.target.value})
    }

    //Cuando el usuario envia un proyecto

    const onSubmit = e =>{
        e.preventDefault()

        //Validar proyecto

        //Agregar al state

        //Reiniciar el state
    }

    return ( 
        <>
            <button
                type="button"
                className="btn btn-primario btn-block"
                >Nuevo Proyecto</button>
            
            <form action=""
                onSubmit={onSubmit}
                className="formulario-nuevo-proyecto"
            >
                <input type="text" 
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    onChange={onChangeProyecto}
                    value={nombre}
                />
                <input type="submit" 
                    className="btn btn-primario btn-block"
                    value="Agregar proyecto"
                />
            </form>
        </>
     );
}
 
