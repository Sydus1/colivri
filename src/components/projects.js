import React, { useState } from 'react';
import proyectosData from '../data/proyects.json';
import Modal from 'react-modal'; // Asegúrate de haber instalado react-modal
import ProyectoGrid from './gridProyect'; // Asegúrate de que el archivo y la ruta sean correctos
import '../styles/projects.css'; // Asegúrate de crear este archivo CSS

function Projects() {
  const [proyectos, setProyectos] = React.useState(proyectosData);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const abrirModal = proyecto => {
    setProyectoSeleccionado(proyecto);
  };

  const cerrarModal = () => {
    setProyectoSeleccionado(null);
  };

  return (
    <div>
      <ProyectoGrid proyectos={proyectos} onProyectoClick={abrirModal} />
      <Modal
        isOpen={proyectoSeleccionado !== null}
        onRequestClose={cerrarModal}
        contentLabel="Detalle del Proyecto"
        className="ModalContent"
        overlayClassName="ModalOverlay"
      >
        {proyectoSeleccionado && (
          <div>
            <h2>{proyectoSeleccionado.nombreProyecto}</h2>
            <img src={require(`../assets/proyectos/${proyectoSeleccionado.foto}`)} alt={proyectoSeleccionado.nombreProyecto} className="modal-foto-proyecto"/>
            <p>{proyectoSeleccionado.descripcion}</p>
          </div>
        )}
      </Modal>
    </div>
  );

}

export default Projects;