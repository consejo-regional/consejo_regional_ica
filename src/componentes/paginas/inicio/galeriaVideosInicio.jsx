import React from 'react'
import {useState} from "react"

import FsLightbox from 'fslightbox-react';




const GaleriaVideosInicio = ()=> {

    const [toggler, setToggler] = useState(false);


      return(
        <>


            <FsLightbox
                toggler={ toggler }
                sources={ [
                    'https://www.youtube.com/watch?v=thQzXxSGWSs',
                    'https://www.youtube.com/watch?v=0MaV0iVxJ38',
                    'https://www.youtube.com/watch?v=JK7A2t6TfoU'
                ] }

            />



            <div className="contenedor-serviciosGrid-titulo">
                <div className="contenedor-serviciosGrid-logo">
                    <div className="logo-colegio-svg"></div>
                </div>
                <div className="contenedor-serviciosGrid-contenido">
                    <div className="contenedor-serviciosGrid-contenido-conteiner">
                        <div className="contenedor-serviciosGrid-contenido1">GALERIA</div>
                        <div className="contenedor-serviciosGrid-contenido2">CURSOS</div>
                    </div>
                </div>


            </div>

            <div className="contenedor-video-inicio">

                <div>
                        <figure>

                            <img alt='' src="https://elcomercio.pe/resizer/kB4YyQ2x8WFmaPe-cIysakiR7HQ=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VCWG5NGFOFBJ3L7SQVQ3ZV7GYM.jpg"/>
                            <div className="capa">
                                <h3>GALERIA DE CURSOS</h3>
                                {/* <div className="boton-contenedor-video"> 
                                    <button class="boton-video-inicio" onClick={ () => setToggler(!toggler) }> VER </button>
                                </div> */}

                            </div>
                        </figure>
                </div>
                <button className="boton-video-inicio" onClick={ () => setToggler(!toggler) }> VER CURSOS </button>

                </div>

            
        </>   
      )  
  }
  
  
  export default GaleriaVideosInicio;
  