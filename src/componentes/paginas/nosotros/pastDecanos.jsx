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

    const[informacion,setInformacion]=useState([])
    useEffect(()=>{
        fetch( `${process.env.REACT_APP_URL_API}past_decano/read.php`)
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])

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
                <VerticalTimeline 
                lineColor="rgb(189, 189, 189"  
                >
                    
                        {informacion.map((c) => {
                            return (
                            <VerticalTimelineElement 
                            dateClassName="date"
                            key="1"
                            date={c.periodo}
                            iconStyle={{ background: "rgb(157, 15, 156)", color: '#fff' }}
                            icon={<CuadernoIcono />}
                            >
                                

                                <div className="contenedor_servicios_item">
                                    <img className="servicios imagen" src={c.fotografia} alt={c.decano}></img>
                                    <div className="vertical-timeline-element-title">{c.decano}</div>
                                </div>

                            </VerticalTimelineElement>
                                
                            );
                        })
                        }
                </VerticalTimeline>
            </div>
        </div>
        </>   
      )  
  }
  
  
  export default PastDecanos;