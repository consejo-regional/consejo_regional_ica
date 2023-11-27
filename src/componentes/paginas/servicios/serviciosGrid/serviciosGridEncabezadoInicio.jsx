import React from 'react'
import ServiciosGrid from './serviciosGrid';

const serviciosGridEncabezadoInicio = ()=> {
      return(
        <>
       <div className="contenedor-serviciosGrid-titulo">
                <div className="contenedor-serviciosGrid-logo">
                    <div className="logo-colegio-svg"></div>
                </div>
                <div className="contenedor-serviciosGrid-contenido">
                  <div className="contenedor-serviciosGrid-contenido-conteiner">
                    <div className="contenedor-serviciosGrid-contenido1">SERVICIOS</div>
                    <div className="contenedor-serviciosGrid-contenido2">DESTACADOS</div>
                  </div>
                </div>
        </div>
        <ServiciosGrid></ServiciosGrid>
        </>   
      )  
  }


  export default serviciosGridEncabezadoInicio;
  