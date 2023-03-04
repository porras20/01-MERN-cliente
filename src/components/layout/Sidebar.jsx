import { useState } from "react"
import { NuevoProyecto } from "../proyectos/NuevoProyecto"

export const Sidebar = () =>{

    return(
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus proyectos a</h2>
            </div>
        </aside>
    )
}