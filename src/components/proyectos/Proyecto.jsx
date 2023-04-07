import { useContext } from "react";
import { proyectoContext } from "../../context/proyectos/proyectoContext";
import TareaContex from "../../context/tareas/tareaContext"

const Proyecto = ({proyecto}) => {
     //Obtener el state de proyectos
     const proyectosContext = useContext(proyectoContext);
     const {proyectoActual} = proyectosContext;


     const tareasContext = useContext(TareaContex);
     const {obtenerTareas} = tareasContext;
     const seleccionarProyecto = id =>{
        proyectoActual(id);
        obtenerTareas(id);
     }
    return (  
        <li>
            <button className="btn btn-blank" 
            onClick={
                () => seleccionarProyecto(proyecto.id)
            }>{proyecto.nombre}</button>
        </li>
    );
}
 
export default Proyecto;