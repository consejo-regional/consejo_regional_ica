import React from 'react'
import faces from '../../assets/iconos/facebook.png'
// import twitters from '../../assets/iconos/twitterr'


const Footer = ()=> {
      return(
        <>
        <div className="contenedor_footer">
            <div className="description_footer">MANTENTE ACTUALIZADO</div>
            <div className="contenedor_imagen_footer">
                <img src={faces} alt="" className="imagen_footer"></img>
                <img src={faces} alt="" className="imagen_footer"></img>

            </div>

           
        </div>
        </>   
      )  
  }
  
  
  export default Footer;
  