import React from 'react'
import faces from '../../assets/iconos/facebook.svg'
import twitters from '../../assets/iconos/twitter.svg'

const Footer = ()=> {
      return(
        <>
        <div className="contenedor_footer">
            <img src={faces}></img>
            <img src={twitters}></img>

           
        </div>
        </>   
      )  
  }
  
  
  export default Footer;
  