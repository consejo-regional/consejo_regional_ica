import React from 'react'


const RedesSociales = ()=> {
      return(
        <>
        <div className="contenedor_redes">
          <a href="https://www.facebook.com/ConsejoRegionalIca" target="_blank">
            <img className='icono' src={process.env.PUBLIC_URL +'/iconos/facebook1.png'}></img>
          </a>
          <a href="https://twitter.com/cmpregionalica?lang=en" target="_blank">
            <img className='icono' src={process.env.PUBLIC_URL +'/iconos/twitter1.png'}></img>
          </a>
          <a href="https://www.youtube.com/channel/UCXq7g8PacKGuv9hR76AklYw" target="_blank">
            <img className='icono' src={process.env.PUBLIC_URL +'/iconos/youtube1.png'}></img>
          </a>
          <a href="https://www.instagram.com/consejo_regional_ix_ica/" target="_blank">
            <img className='icono' src={process.env.PUBLIC_URL +'/iconos/instagram.png'}></img>
          </a>
            
        </div>

        
       
        </>   
      )  
  }
  
  
  export default RedesSociales;
  