import { useReducer } from "react";
import TareaReducer from "./tareaReducer";
import {
  AGREGAR_TAREA,
  TAREAS_PROYECTO,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
} from "../../types";
import TareaContext from "./tareaContext";
import { type } from "@testing-library/user-event/dist/type";
import { v4 as uuidv4 } from 'uuid';

export const TareaState = (props) => {
  const initialState = {
    tareas: [
    ],
    tareasProyecto: null,
    errortarea: false,
    tareaSeleccionada: null,
  };

  //Crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  const agregarTarea = (tarea) => {
    tarea.id = uuidv4();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  //Valida y muestra un error e caso de que sea necesario
  const validarTarea = (tarea) => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  const actualizarTarea = (tarea) =>{
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea
    });
  }

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        obtenerTareas,
        tareasProyecto: state.tareasProyecto,
        agregarTarea,
        errortarea: state.errortarea,
        tareaSeleccionada: state.tareaSeleccionada,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};
