import React from 'react'
import RedesSociales from './redesSociales'
import MenuItem from './menuItem'
import BannerPrincipal from './bannerPrincipal'


const Menu = ()=> {
      return(
        <>
        <div className="principal">
            <div className='contenedor-principal'>
                <div className='contenedor'>
                    <div className="menu">
                        <div className='logo'></div>
                    </div>
                </div>
            </div>
        </div>
        <RedesSociales></RedesSociales>
        <BannerPrincipal></BannerPrincipal>
        {/* <MenuItem></MenuItem> */}



        
       
        </>   
      )  
  }
  
  
  export default Menu;
  