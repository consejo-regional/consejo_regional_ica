import React  from 'react'

import SericiosGridEncabezadoInicio from '../servicios/serviciosGrid/serviciosGridEncabezadoInicio'
import FooterContacto from '../../componente/footer/footerContacto'
import {useEffect,useState} from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Publicaciones from '../../componente/slider/publicacionesDestacadas'
import PalabrasDecano from './palabrasDecano'
import NoticiasDestacadas from './noticiasDestacadas'
import AnimatedNumbers from "react-animated-numbers";
// import GaleriaVideosInicio from './galeriaVideosInicio';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderPrincipal from '../../componente/slider/sliderPrincipal'
import Footer from '../../componente/footer/footer';



const Home = ()=> {

  // const[contador,setContador]=useState([])
  // const[informacion,setInformacion]=useState([])

   useEffect(()=>{
   AOS.init({duration: 1000})

  //  fetch("https://api.countapi.xyz/update/cmpica.org.pe/llavereact/?amount=1")
  //  .then(response=>response.json())
  //  .then(
  //   data=>setContador(data.value)
  //  )
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

{/*       
        <GaleriaVideosInicio></GaleriaVideosInicio> */}

{/* 
        <div className="contenedor-separador-bloque">
            <hr className="separador-bloque"></hr>
        </div> */}

        <PalabrasDecano></PalabrasDecano>

        <div className="contenedor-separador-bloque">
            <hr className="separador-bloque"></hr>
        </div>

        <NoticiasDestacadas></NoticiasDestacadas>

        {/* <div className="contenedorContadorVisitas">
              <div className="countdown">
                      <div className="box">
                          <span className="text">Esta pagina ha sido vista</span>
                          <span className="num" id="day-box">
                                <AnimatedNumbers
                                      animateToNumber={contador}
                                      fontStyle={{ fontSize: 55 }}
                                      configs={
                                        [{"mass":1,"tension":30,"friction":10},{"mass":2,"tension":40,"friction":10},{"mass":3,"tension":30,"friction":10}]
                                      }   
                                    >
                              </AnimatedNumbers>   
                          </span>
                          <span className="text">VECES</span>
                      </div> 
              </div>
        </div> */}


        {/* <div data-aos="fade-up"> */}
        <FooterContacto></FooterContacto> 
        {/* </div> */}
       

        </>   
      )  
  }
  
  
  export default Home;
  