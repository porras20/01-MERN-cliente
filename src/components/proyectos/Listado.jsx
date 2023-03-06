import Proyecto from "./Proyecto";

export const ListadoProyectos = () => {
    const proyectos = [
       { nombre: 'Tienda virtual'},
       { nombre: 'Intranet'},
       { nombre: 'Diseño de sitio web'},

    ]
    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto =>(
                <Proyecto 
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
