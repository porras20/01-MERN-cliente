import { Tarea } from "./Tarea";



export const ListadoTareas = () => {
    
    const tareasProyecto = [
        {nombre: 'Elegir plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir formas de pago', estado: true},
        {nombre: 'Elegir Pago', estado: false}
    ]
    
    return ( 
        <>
            <h2>Proyecto: tienda virtual</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0 
                    ? <li className="tarea"><p>o hay tareas</p></li>
                    : tareasProyecto.map(tarea => (
                        <Tarea tarea = {tarea}>

                        </Tarea>
                    ))
                }
            </ul>
            <button type="button" className="btn btn-eliminar">Eliminar proyecto &times;</button>
        </>
     );
}
 
