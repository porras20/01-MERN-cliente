import { useContext, useState } from "react";
import { proyectoContext } from "../../context/proyectos/proyectoContext";


export const NuevoProyecto = () => {

    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext;
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
        mostrarError()
        if (nombre === '') return;
    
        //Agregar al state
        agregarProyecto(proyecto);
        //Reiniciar el state
        setProyecto({
            nombre: ''
        })
    }

    return ( 
        <>
            <button
                type="button"
                className="btn btn-primario btn-block"
                onClick={() => mostrarFormulario()}
                >Nuevo Proyecto</button>
            
        {
            formulario 
            ?
            (
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
            )
            : null}

            {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null }

        </>
     );
}
 
