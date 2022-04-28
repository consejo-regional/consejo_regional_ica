import React  from 'react'
import RedesSociales from '../moleculas/redesSociales'
import MenuItem from '../moleculas/menuItem'
import BannerPrincipal from '../moleculas/bannerPrincipal'
import Menu from '../moleculas/menu'

const Home = ()=> {

   

      return(
        <>
        <Menu></Menu>
        <RedesSociales></RedesSociales>
        <MenuItem></MenuItem>
        <BannerPrincipal></BannerPrincipal>
        </>   
      )  
  }
  
  
  export default Home;
  