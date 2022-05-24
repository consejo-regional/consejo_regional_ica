import React from 'react'



const Footer = ()=> {
      return(
        <>
        <div className="contenedor_footer">
            <div className="description_footer">MANTENTE ACTUALIZADO</div>
            <div className="contenedor_imagen_footer">
                <a href="https://www.facebook.com/ConsejoRegionalIca" target="_blank">
                <img src={process.env.PUBLIC_URL + `/iconos/facebook.png`} alt="" className="imagen_footer"></img>
                </a>
                <a href="https://twitter.com/cmpregionalica?lang=en" target="_blank">
                <img src={process.env.PUBLIC_URL + `/iconos/twitter.png`} alt="" className="imagen_footer"></img>
                </a>
                <a href="https://www.youtube.com/channel/UCXq7g8PacKGuv9hR76AklYw" target="_blank">
                <img src={process.env.PUBLIC_URL + `/iconos/youtube.png`} alt="" className="imagen_footer imagen_footer1"></img>
                </a>
            </div>

           
        </div>
        </>   
      )  
  }
  
  
  export default Footer;
  