import React  from 'react'

import SericiosGrid from './serviciosGrid'
import FooterContacto from '../moleculas/footerContacto'

import  Slider from '../moleculas/slider/Slider'


import {useEffect} from "react"
// import AOS from "aos";
import "aos/dist/aos.css";
import Publicaciones from '../moleculas/publicaciones'
import PalabrasDecano from '../moleculas/palabrasDecano'


const Home = ()=> {

   useEffect(()=>{
   // AOS.init({duration: 1000})
   },[])

      return(
        <>
        
        <Slider></Slider>
 
        <div data-aos="fade-up">

        <SericiosGrid></SericiosGrid> 
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




        <div data-aos="fade-up">
        <FooterContacto></FooterContacto> 
        </div>
        

        </>   
      )  
  }
  
  
  export default Home;
  