import React from 'react'
import { ReactComponent as CuadernoIcono } from "../../../iconos/cuaderno.svg";
import { ReactComponent as PeriodicoIcono } from "../../../iconos/periodico.svg";
import { useEffect,useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const PastDecanos = ()=> {
      return(
        <>
        <div className="contenedor_banner">
            <div className="container-imagen-banner">
                <div className="conteiner-imagen-banner-blur">
                    
                    <div className="logo-banner">
                        <div className="logo-banner-svg"></div>
                    </div>
                    <div className="titulo-contenido-banner">
                        <div className="titulo-contenido-banner-izquierda">PAST</div>
                        <div className="titulo-contenido-banner-derecha">DECANOS</div>
                    </div>
                </div>

            </div>

            <div className="container-descripccion-colegio">
            </div>
        </div>
        </>   
      )  
  }
  
  
  export default PastDecanos;