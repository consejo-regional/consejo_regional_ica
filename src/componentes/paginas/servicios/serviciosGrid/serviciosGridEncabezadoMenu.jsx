import React from 'react'
import ServiciosGrid from './serviciosGrid';


const serviciosGridEncabezadoMenu = ()=> {
      return(
        <>
       <div className="container-imagen-banner">
                <div className="conteiner-imagen-banner-blur">
                    <div className="logo-banner">
                        <div className="logo-banner-svg"></div>
                    </div>
                    <div className="titulo-contenido-banner">
                        <div className="titulo-contenido-banner-izquierda">NUESTROS</div>
                        <div className="titulo-contenido-banner-derecha">SERVICIOS</div>
                    </div>

                </div>

        </div>
        <ServiciosGrid></ServiciosGrid>
        </>   
      )  
  }


  export default serviciosGridEncabezadoMenu;