import React from 'react';
import '../styles/gridProyect.css';

function ProyectoGrid({ proyectos, onProyectoClick }) {
    console.log(proyectos);
  return (
    <div className="grid">  
      {proyectos.map(proyecto => (
        <div key={proyecto.nombreProyecto} className="proyecto" onClick={() => onProyectoClick(proyecto)}>
          <img src={require(`../assets/proyectos/${proyecto.foto}`)} alt={proyecto.nombreProyecto} className="foto-proyecto"/>
          <h3>{proyecto.nombreProyecto}</h3>
          <p>{proyecto.descripcion}</p>
          
        </div>
      ))}
    </div>
  );
}

export default ProyectoGrid;
