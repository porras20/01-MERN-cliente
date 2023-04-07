import { useReducer } from "react";
import TareaReducer from "./tareaReducer";
import { AGREGAR_TAREA, TAREAS_PROYECTO } from "../../types";
import TareaContext from "./tareaContext";
export const TareaState = props =>{
    const initialState = {
        tareas: [
            {nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
            {nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {nombre: 'Elegir formas de pago', estado: true, proyectoId: 3},
            {nombre: 'Elegir Pago', estado: false, proyectoId: 4}
        ],
        tareasProyecto: null,
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);


    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    return(
        <TareaContext.Provider value={{ 
            tareas: state.tareas,
            obtenerTareas,
            tareasProyecto: state.tareasProyecto,
            agregarTarea,
            }}>
            {props.children}
        </TareaContext.Provider>
    )
}