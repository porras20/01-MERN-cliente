import { useContext, useState } from "react";
import { proyectoContext } from "../../context/proyectos/proyectoContext";
import TareaContex from "../../context/tareas/tareaContext";

export const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;
    
    const tareasContext = useContext(TareaContex);
    const { agregarTarea } = tareasContext;

    // state del formulario
    const [tarea, setTarea] = useState({
        nombre: '',
    });

    const { nombre } = tarea;

    if (!proyecto) return null;

    //Array destructuring para extraer el proycto actual 
    const [proyectoActual] = proyecto;


    const handleChange = (e) => {
        setTarea({
          ...tarea,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        //Validar 

        //pasar la validacion

        //Agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id
        tarea.estado = false;
        agregarTarea(tarea);
    }


    return ( 
        <div className="formulario">
            <form action="" onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Nombre tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                        />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar tarea"
                        />
                </div>
            </form>
        </div>
     );
}
 