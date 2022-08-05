import React from 'react'

import {Slideshow, Slide, TextoSlide} from './SlidesAutoplay'
import {Link} from 'react-router-dom'

import styled from 'styled-components';




const Publicaciones = ()=> {
      return(
        <>




<div className="contenedor-publicaciones">

        <div className="contenedor-serviciosGrid-titulo">
                <div className="contenedor-serviciosGrid-logo">
                    <div className="logo-colegio-svg"></div>
                </div>
                <div className="contenedor-serviciosGrid-contenido">
                    <div className="contenedor-serviciosGrid-contenido-conteiner">

                        <div className="contenedor-serviciosGrid-contenido1">PUBLICACIONES</div>
                        <div className="contenedor-serviciosGrid-contenido2">DESTACADOS</div>
                    </div>
                </div>

            </div>

<div className="contendor-slider-varios">

<main>
            <Titulo>COMUNICADOS</Titulo>

			<Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
				<Slide>
                    <Link to="/comunicaciones/pronunciamiento">
                        <img alt="" src={process.env.PUBLIC_URL + `/opinion/COMUNICADO 1.jpeg`}></img>

                    </Link>
				</Slide>
                <Slide>
                    <Link to="/comunicaciones/pronunciamiento">
                        <img alt=""  src={process.env.PUBLIC_URL + `/opinion/Pronunciamiento 6.jpeg`}></img>

                    </Link>
				</Slide>
                <Slide>
                    <Link to="/comunicaciones/pronunciamiento">
                        <img alt=""  src={process.env.PUBLIC_URL + `/opinion/Pronunciamiento 5.jpeg`}></img>
                    </Link>
				</Slide>
				
				
			</Slideshow>
		</main>

        <main>
        <Titulo>CURSOS/EVENTOS</Titulo>

			<Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
                <Slide>
                    <Link to="/eventos">
                        <img  src={process.env.PUBLIC_URL + `/eventos/ACTUALIZACION EN ENDOCRINOLOGIA1.jpg`} alt=""/>
                    </Link>
				</Slide>
                <Slide>
                    <Link to="/eventos">
                        <img src={process.env.PUBLIC_URL + `/eventos/WhatsApp Image 2022-06-08 at 3.02.40 PM.jpeg`} alt=""/>
                    </Link>
				</Slide>
				
			</Slideshow>
		</main>

        <main>
        <Titulo>NOTICIAS</Titulo>

			<Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
                <Slide>
                    <Link to="/comunicaciones/noticias">
                        <img className="img" src={process.env.PUBLIC_URL + `/noticias/FUTBOL MUJERES IMG 1.jpg`} alt=""/>
                    </Link>
				</Slide>
                <Slide>
                    <Link to="/comunicaciones/noticias">
                        <img className="img" src={process.env.PUBLIC_URL + `/noticias/vacunacion.png`} alt=""/>
                    </Link>
                    <TextoSlide>JORNADA DE VACUNACION</TextoSlide>
				</Slide>
			</Slideshow>
		</main>

</div>


           

</div>


      

        </>   
      )  
  }
  

  const Titulo = styled.p`
  font-size: 1.3rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;


  
  export default Publicaciones;
  