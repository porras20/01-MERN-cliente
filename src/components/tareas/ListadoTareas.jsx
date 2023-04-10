import { useContext } from "react";
import { proyectoContext } from "../../context/proyectos/proyectoContext";
import { Tarea } from "./Tarea";
import TareaContext from "../../context/tareas/tareaContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const ListadoTareas = () => {
    
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    const tareasContext = useContext(TareaContext);
    const { tareasProyecto }  = tareasContext;
    
    //Si no hay proyecto seleccionado
    if (!proyecto) {
        return (
            <h2>Selecciona un proyecto</h2>
        )
    }
    
    //Extraemos el proyecto actual
    const [ proyectoActual ] = proyecto;

    //Eliminar proyecto
    const onclickEliminar = () =>{
        eliminarProyecto(proyectoActual.id);
    }
    
    return ( 
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0 
                    ? <li className="tarea"><p>No hay tareas</p></li>
                    : 
                    <TransitionGroup>
                    {tareasProyecto.map(tarea => (
                        <CSSTransition 
                            key={tarea.id}
                            timeout={200}
                            classNames="tarea">
                            <Tarea tarea = {tarea}>
                            </Tarea>
                        </CSSTransition>
                    ))}
                        
                    </TransitionGroup>
                }
            </ul>
            <button 
                type="button" 
                className="btn btn-eliminar"
                onClick={onclickEliminar}
                >
                Eliminar proyecto &times;
                </button>
        </>
     );
}
 
