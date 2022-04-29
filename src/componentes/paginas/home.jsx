import React  from 'react'
import RedesSociales from '../moleculas/redesSociales'
import MenuItem from '../moleculas/menuItem'
import BannerPrincipal from '../moleculas/bannerPrincipal'
import Menu from '../moleculas/menu'
import BannerHome from '../moleculas/bannerHome'
import SericiosGrid from '../moleculas/serviciosGrid'

const Home = ()=> {

   

      return(
        <>
        <Menu></Menu>
        <RedesSociales></RedesSociales>
        <MenuItem></MenuItem>
        <BannerPrincipal></BannerPrincipal>
        <BannerHome></BannerHome>
        <SericiosGrid></SericiosGrid>
        </>   
      )  
  }
  
  
  export default Home;
  