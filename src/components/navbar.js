import React from "react";
import '../styles/navbar.css';
import logo from '../assets/imgs/navbar.png';

function Navbar() {
    return (
        <div className="navbar">
          <a href="/"><img src={logo} alt="Logo" className="navbar-logo" /></a>
          <div className="navbar-links">
            <a href="/projects">Proyectos</a>
            <a href="#">Papers</a>
            <a href="#">Grupos</a>
            <a href="#">Noticias</a>
            <a href="#">Equipo</a>
            {/* Más enlaces si es necesario */}
          </div>
        </div>
      );
}

export default Navbar;