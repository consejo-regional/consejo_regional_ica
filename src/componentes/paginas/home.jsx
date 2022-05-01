import React  from 'react'
import RedesSociales from '../moleculas/redesSociales'
import MenuItem from '../moleculas/menuItem'
import BannerPrincipal from '../moleculas/bannerPrincipal'
import Menu from '../moleculas/menu'
import BannerHome from '../moleculas/bannerHome'
import SericiosGrid from '../moleculas/serviciosGrid'
import Eventos from '../moleculas/eventos'
import FooterContacto from '../moleculas/footerContacto'
import Footer from '../moleculas/footer'

const Home = ()=> {

   

      return(
        <>
        <Menu></Menu>
        <RedesSociales></RedesSociales>
        <MenuItem></MenuItem>
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
  