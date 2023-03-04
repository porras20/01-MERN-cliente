import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {

    //State iniciar sesion
    const[usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    // extraer usuario
    const { email, password } = usuario;

    const onChange = e =>{
        setUsuario({
            ...usuario, [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario quiere iniciar sesion
    const onSubmit = e =>{
        e.preventDefault();

        //Validar que no haya campos vacios
        //Pasarlo al action
    }

    
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>
                <form
                    onSubmit={onSubmit}>
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
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesion"/>
                    </div>
                </form>
                <Link to={'nueva-cuenta'} className="enlace-cuenta">Crea una cuenta</Link>
            </div>
        </div>
     );
}
 