import React, { useState } from 'react';
import '../styles/navbar.css';
import logo from '../assets/imgs/navbar.png';

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className="pos-f-t">
      {/* Contenido colapsable para dispositivos móviles */}
      <div className={isNavCollapsed ? 'collapse' : 'collapse show'} id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <nav className="nav flex-column">
            <a className="nav-link active text-white" href="/eventos">Proyectos</a>
            <a className="nav-link text-white" href="/eventos">Papers</a>
            <a className="nav-link text-white" href="/eventos">Grupos</a>
            <a className="nav-link text-white" href="/eventos">Eventos</a>
            <a className="nav-link text-white" href="/eventos">Equipo</a>
            {/* Más enlaces si es necesario */}
          </nav>
        </div>
      </div>
      {/* Navbar para todas las pantallas, con cambios en pantallas grandes */}
      <nav className="navbar navbar-dark bg-dark">
        <button 
          className="navbar-toggler d-lg-none" // Solo visible en pantallas pequeñas
          type="button" 
          onClick={handleNavCollapse} 
          aria-controls="navbarToggleExternalContent" 
          aria-expanded={!isNavCollapsed} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/"><img src={logo} alt="Logo" className="navbar-logo" /></a>
        <div className="navbar-links d-none d-lg-flex ml-auto"> {/* Oculto en pantallas pequeñas */}
          <a href="/eventos" className="nav-link">Proyectos</a>
          <a href="/eventos" className="nav-link">Papers</a>
          <a href="/eventos" className="nav-link">Grupos</a>
          <a href="/eventos" className="nav-link">Eventos</a>
          <a href="/eventos" className="nav-link">Equipo</a>
          {/* Más enlaces si es necesario */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
