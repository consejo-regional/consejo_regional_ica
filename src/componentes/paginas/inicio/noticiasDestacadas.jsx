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
        fetch( `${process.env.REACT_APP_URL_API}noticias/read.php`)
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

            <div className="conteiner-destacado">
               
               <div className="conteiner-destacado-item">
                <img className="imagen_noticias_timeline" src={process.env.PUBLIC_URL+`/` +  element.imagen} alt={''}></img>
               </div>
            
               <div className="conteiner-destacado-item">
                  <h4 className="contenido_destacado_titulo">{element.titulo}</h4>
                  <div className="contenido_destacado_descripccion" >{element.description}</div>
                  <div>{element.localizacion}</div>
                  {showButton && (
                    <div className="conteiner-destacado-boton" >

                      <Link 
                      target={"_top"}
                      className={`button ${
                      esIconoPeriodico ? "workButton" : "schoolButton"
                      }`}
                      to={`/noticias/${element.id}`} 
                      >
                        {element.textoBoton}
                      </Link>
                    </div>
                  )}
               </div>

            </div>

                 
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