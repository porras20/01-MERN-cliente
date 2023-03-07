import { useContext } from "react";
import { proyectoContext } from "../../context/proyectos/proyectoContext";
import { Tarea } from "./Tarea";


export const ListadoTareas = () => {
    
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Si no hay proyecto seleccionado
    if (!proyecto) {
        return (
            <h2>Selecciona un proyecto</h2>
        )
    }
    
    //Extraemos el proyecto actual
    const [ proyectoActual ] = proyecto;

    const tareasProyecto = [
        {nombre: 'Elegir plataforma', estado: true, id: 1},
        {nombre: 'Elegir Colores', estado: false, id: 10},
        {nombre: 'Elegir formas de pago', estado: true, id: 100},
        {nombre: 'Elegir Pago', estado: false, id: 1000}
    ]
    
    return ( 
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0 
                    ? <li className="tarea"><p>No hay tareas</p></li>
                    : tareasProyecto.map(tarea => (
                        <Tarea tarea = {tarea} key={tarea.id}>

                        </Tarea>
                    ))
                }
            </ul>
            <button type="button" className="btn btn-eliminar">Eliminar proyecto &times;</button>
        </>
     );
}
 
