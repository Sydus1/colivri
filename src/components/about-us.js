import React from "react";
import '../styles/about.css';
import logo from "../assets/imgs/logo.png";

function Navbar() {
    return (
        <div className="about">
            <h2>¿Qué es ColiVRi?</h2>

            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <img src={logo}></img>
                    </div>
                    <div className="col-7">
                        <li>
                            <ul>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) de</p>
                            </ul>

                            <ul>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) de</p>
                            </ul>

                            <ul>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) de</p>
                            </ul>

                        </li>
                        
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Navbar;