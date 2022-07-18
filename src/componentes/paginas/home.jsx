import React  from 'react'
//import BannerPrincipal from '../moleculas/bannerPrincipal'
//import BannerHome from '../moleculas/bannerHome'
import SericiosGrid from './serviciosGrid'
//import Eventos from '../moleculas/eventos'
import FooterContacto from '../moleculas/footerContacto'

import  Slider from '../moleculas/slider/Slider'
//import EventosPage from './eventosPage'
import Comunicaciones from './noticiasPage'

import {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";


const Home = ()=> {

   useEffect(()=>{
   // AOS.init({duration: 1000})
   },[])

      return(
        <>
        
        {/* <BannerPrincipal></BannerPrincipal> */}
        <Slider></Slider>
        {/* <BannerHome></BannerHome> */}

        <div data-aos="fade-up">

        <SericiosGrid></SericiosGrid> 
        </div>


        {/* <Eventos></Eventos> */}
        {/* <EventosPage></EventosPage> */}

        <div >
        <Comunicaciones></Comunicaciones>
        </div>
        <div data-aos="fade-up">
        <FooterContacto></FooterContacto> 
        </div>
        

        </>   
      )  
  }
  
  
  export default Home;
  