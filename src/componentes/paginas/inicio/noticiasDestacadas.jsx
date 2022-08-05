import React from "react"
import { ReactComponent as WorkIcon } from "../../../iconos/work.svg";
import { ReactComponent as SchoolIcon } from "../../../iconos/school.svg";

import timelineElements from "../../../data/noticiasDestacadasDatos";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import {Link} from 'react-router-dom'



let workIconStyles = { background: "rgb(157, 97, 156)" };
let schoolIconStyles = { background: "rgb(157, 97, 156)" };




const NoticiasDestacadas=()=>(

 

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
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>

              <p id="description">{element.description}</p>

              <img className="imagen_noticias_timeline" src={element.imagen} alt={''}></img>


              {showButton && (
                <Link
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  to={`/noticias/${element.id}`} 
                >
                  {element.buttonText}
                </Link>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>





    </>
)

export default NoticiasDestacadas