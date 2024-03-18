import React  from 'react'
import SericiosGridEncabezadoInicio from '../servicios/serviciosGrid/serviciosGridEncabezadoInicio'
import FooterContacto from '../../componente/footer/footerContacto'
import {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Publicaciones from '../../componente/slider/publicacionesDestacadas'
import PalabrasDecano from './palabrasDecano'
import NoticiasDestacadas from './noticiasDestacadas'
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderPrincipal from '../../componente/slider/sliderPrincipal'

const Home = ()=> {

   useEffect(()=>{
   AOS.init({duration: 1000})

  },[])
      return(
        <>
              <main className="slider-principal">
                    <SliderPrincipal></SliderPrincipal>
              </main>
        
                <div data-aos="fade-up">
                  <SericiosGridEncabezadoInicio></SericiosGridEncabezadoInicio> 
                </div>

                <div className="contenedor-separador-bloque">
                    <hr className="separador-bloque"></hr>
                </div>

                <div data-aos="fade-up">
                  <Publicaciones></Publicaciones>
                </div>

                <div className="contenedor-separador-bloque">
                    <hr className="separador-bloque"></hr>
                </div>

                <PalabrasDecano></PalabrasDecano>

                <div className="contenedor-separador-bloque">
                    <hr className="separador-bloque"></hr>
                </div>

                <NoticiasDestacadas></NoticiasDestacadas>

                <FooterContacto></FooterContacto> 
        </>   
      )  
  }
  
  
  export default Home;
  