import { useContext } from "react";
import TareaContex from "../../context/tareas/tareaContext";
import { proyectoContext } from "../../context/proyectos/proyectoContext";

export const Tarea = ({ tarea }) => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareaContext = useContext(TareaContex);
  const {
    eliminarTarea,
    obtenerTareas,
    cambiarEstadoTarea,
    guardarTareaActual,
  } = tareaContext;

  const [proyectoActual] = proyecto;

  const tareaEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  const cambiarEstado = (tarea) => {
    tarea.estado = tarea.estado ? false : true;
    cambiarEstadoTarea(tarea);
  };

  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  }

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            className="completo"
            onClick={() => cambiarEstado(tarea)}
          >
            Commpleto
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => cambiarEstado(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario" onClick={() => seleccionarTarea(tarea)}>
          Editar
        </button>
        <button
          type="button"
          onClick={() => tareaEliminar(tarea.id)}
          className="btn btn-secundario"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};
