import React from 'react'
import faces from '../../assets/iconos/facebook.png'
import twitterr from '../../assets/iconos/twitter.png'
import youtube from '../../assets/iconos/youtube.png'
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
                <a href="https://www.youtube.com/channel/UCXq7g8PacKGuv9hR76AklYw" target="_blank">
                <img src={youtube} alt="" className="imagen_footer imagen_footer1"></img>
                </a>
            </div>

           
        </div>
        </>   
      )  
  }
  
  
  export default Footer;
  