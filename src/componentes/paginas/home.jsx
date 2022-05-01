import React  from 'react'
import BannerPrincipal from '../moleculas/bannerPrincipal'
import BannerHome from '../moleculas/bannerHome'
import SericiosGrid from '../moleculas/serviciosGrid'
import Eventos from '../moleculas/eventos'
import FooterContacto from '../moleculas/footerContacto'
import Footer from '../moleculas/footer'




const Home = ()=> {

   

      return(
        <>
       
        <BannerPrincipal></BannerPrincipal>
        <BannerHome></BannerHome>
        <SericiosGrid></SericiosGrid>
        <Eventos></Eventos>
        <FooterContacto></FooterContacto>
        <Footer></Footer>

        </>   
      )  
  }
  
  
  export default Home;
  