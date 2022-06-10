import React  from 'react'
//import BannerPrincipal from '../moleculas/bannerPrincipal'
//import BannerHome from '../moleculas/bannerHome'
import SericiosGrid from './serviciosGrid'
//import Eventos from '../moleculas/eventos'
import FooterContacto from '../moleculas/footerContacto'

import  Slider from '../moleculas/slider/Slider'
import EventosPage from './eventosPage'
import Comunicaciones from './comunicaciones'




const Home = ()=> {

   

      return(
        <>
        
        {/* <BannerPrincipal></BannerPrincipal> */}
        <Slider></Slider>
        {/* <BannerHome></BannerHome> */}
        <SericiosGrid></SericiosGrid> 


        {/* <Eventos></Eventos> */}
        {/* <EventosPage></EventosPage> */}
        <Comunicaciones></Comunicaciones>
        <FooterContacto></FooterContacto> 
      

        </>   
      )  
  }
  
  
  export default Home;
  