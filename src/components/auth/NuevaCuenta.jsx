import { useState } from "react";
import { Link } from "react-router-dom";

export const NuevaCuenta = () => {

    //State iniciar sesion
    const[usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extraer usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = e =>{
        setUsuario({
            ...usuario, [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario quiere iniciar sesion
    const onSubmit = e =>{
        e.preventDefault();

        //Validar que no haya campos vacios
        
        //Paswword minimo de 6 caracteres

        //Ambos password sean iguales
        
        //Pasarlo al action
    }

    
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear una cuenta</h1>
                <form
                    onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="usuario">Nombre</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            placeholder="Tu nombre de usuario" 
                            value={nombre}
                            onChange={onChange}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Tu email" 
                            value={email}
                            onChange={onChange}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Tu pass" 
                            value={password}
                            onChange={onChange}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input 
                            type="password" 
                            id="confirmar" 
                            name="confirmar" 
                            placeholder="Repite tu pass" 
                            value={confirmar}
                            onChange={onChange}/>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Crear cuenta"/>
                    </div>
                </form>
                <Link to={'login'} className="enlace-cuenta">Iniciar sesión</Link>
            </div>
        </div>
     );
}
 