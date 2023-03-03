import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/auth/Login';
import { NuevaCuenta } from './components/auth/NuevaCuenta';
import { Proyectos } from './components/proyectos/Proyectos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<Login/>} />
        <Route path="nueva-cuenta" element={<NuevaCuenta/>}/>
        <Route path="proyectos" element={<Proyectos/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
