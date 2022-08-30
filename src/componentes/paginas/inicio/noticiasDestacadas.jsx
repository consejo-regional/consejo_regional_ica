import React from "react"
import { ReactComponent as CuadernoIcono } from "../../../iconos/cuaderno.svg";
import { ReactComponent as PeriodicoIcono } from "../../../iconos/periodico.svg";
import { useEffect,useState } from "react";




import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import {Link} from 'react-router-dom'



let periodicoEstiloIcono = { background: "rgb(157, 15, 156)" };
let cuadernoEstiloIcono  = { background: "rgb(157, 97, 156)" };




const NoticiasDestacadas=()=>{

  const[informacion,setInformacion]=useState([])
    useEffect(()=>{
        fetch("https://api.cmpica.org.pe/api/noticias/read.php")
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])
  


  return(
  <>
   <div className="contenedor-serviciosGrid-titulo">
                <div className="contenedor-serviciosGrid-logo">
                    <div className="logo-colegio-svg"></div>
                </div>
                <div className="contenedor-serviciosGrid-contenido">
                    <div className="contenedor-serviciosGrid-contenido-conteiner">
                        <div className="contenedor-serviciosGrid-contenido1">NOTICIAS</div>
                        <div className="contenedor-serviciosGrid-contenido2">DESTACADAS</div>
                    </div>
                </div>
    </div>

    <div>
      <VerticalTimeline
        lineColor="rgb(189, 189, 189"
      >
        {informacion.map((element) => {
          let esIconoPeriodico = element.icono === "periodico";
          let showButton =
            element.textoBoton !== undefined &&
            element.textoBoton !== null &&
            element.textoBoton !== "";

          return (
            element.esDestacado===1
            ?
            <VerticalTimelineElement
            key={element.id}
            date={element.fecha}
            dateClassName="date"
            iconStyle={esIconoPeriodico ? periodicoEstiloIcono :cuadernoEstiloIcono }
            
            icon={esIconoPeriodico ? <PeriodicoIcono /> : <CuadernoIcono />}
          >
            <h3 className="vertical-timeline-element-title">
              {element.titulo}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              {element.localizacion}
            </h5>

            <p id="description">{element.description}</p>

            <img className="imagen_noticias_timeline" src={process.env.PUBLIC_URL+`/` +  element.imagen} alt={''}></img>
            
            {showButton && (
              <Link 
              target={"_top"}
                className={`button ${
                  esIconoPeriodico ? "workButton" : "schoolButton"
                }`}
                to={`/noticias/${element.id}`} 
       
              >
                {element.textoBoton}
              </Link>
            )}
          </VerticalTimelineElement>
            :
           null
          );
        })
        
        
        }
      </VerticalTimeline>
    </div>





    </>
  )
}

export default NoticiasDestacadas