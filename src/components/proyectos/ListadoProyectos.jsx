import { useContext, useEffect } from "react";
import { proyectoContext } from "../../context/proyectos/proyectoContext";
import Proyecto from "./Proyecto";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const ListadoProyectos = () => {

    //Extraer proyectos de state inicial 
    const proyectosContext = useContext(proyectoContext)
    const { proyectos, obtenerProyectos } = proyectosContext;

    //Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos()
    }, [])
    


    if (proyectos.length === 0 )return null


    return ( 
        <ul className="listado-proyectos">
           <TransitionGroup>
            {proyectos.map(proyecto =>(
                    <CSSTransition 
                        key={proyecto.id}
                        timeout={200}
                        classNames="proyecto"
                        >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition> 
                ))}
           </TransitionGroup>
        </ul>
     );
}
 
