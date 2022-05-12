import React from 'react'
import faces from '../../assets/iconos/facebook.png'
import twitterr from '../../assets/iconos/twitter.png'
// import twitters from '../../assets/iconos/twitterr'


const Footer = ()=> {
      return(
        <>
        <div className="contenedor_footer">
            <div className="description_footer">MANTENTE ACTUALIZADO</div>
            <div className="contenedor_imagen_footer">
                <a href="https://www.facebook.com/ConsejoRegionalIca" target="_blank">
                <img src={faces} alt="" className="imagen_footer"></img>
                </a>
                <a href="https://twitter.com/cmpregionalica?lang=en" target="_blank">
                <img src={twitterr} alt="" className="imagen_footer"></img>
                </a>
            </div>

           
        </div>
        </>   
      )  
  }
  
  
  export default Footer;
  