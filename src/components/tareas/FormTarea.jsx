import { useContext, useState, useEffect } from "react";
import { proyectoContext } from "../../context/proyectos/proyectoContext";
import TareaContex from "../../context/tareas/tareaContext";

export const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;
    
    const tareasContext = useContext(TareaContex);
    const { tareaSeleccionada, agregarTarea, validarTarea, errortarea, obtenerTareas,
        actualizarTarea } = tareasContext;


    useEffect(() => {
      if (tareaSeleccionada!== null) {
        setTarea(tareaSeleccionada);
      }
      else{
        setTarea({
            nombre: ''
        })
      }
    }, [tareaSeleccionada]);
    
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
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        if (tareaSeleccionada === null) {
            //Agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id
            tarea.estado = false;
            agregarTarea(tarea);
        }
        else{
            actualizarTarea(tarea);
        }
        
        obtenerTareas(proyectoActual.id);

        setTarea({
            nombre: ''
        })
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
                        value={tareaSeleccionada ? 'Editar tarea' : 'Guardar tarea'}
                        />
                </div>
            </form>
            {
                errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p>  : null
            }
        </div>
     );
}
 