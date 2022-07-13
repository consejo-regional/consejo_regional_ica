import React from 'react'
import Face from '../../../assets/iconos/face'
import Twitter from '../../../assets/iconos/twitter'
import YouTube from '../../../assets/iconos/youtube'

import Imstagram from '../../../assets/iconos/instagran'


const RedesSociales = ()=> {
      return(
        <>
        <div className="contenedor_redes">
          <a href="https://www.facebook.com/ConsejoRegionalIca" target="_blank">
            <Face></Face>
          </a>
   
          {/* <Sms></Sms> */}
          <a href="https://twitter.com/cmpregionalica?lang=en" target="_blank">

          <Twitter></Twitter>
          </a>
          <a href="https://www.youtube.com/channel/UCXq7g8PacKGuv9hR76AklYw" target="_blank">
          <YouTube></YouTube>
          </a>

          <a href="https://www.instagram.com/consejo_regional_ix_ica/" target="_blank">

            <Imstagram></Imstagram>
          </a>



          {/* <Watsup></Watsup> */}
            
        </div>

        
       
        </>   
      )  
  }
  
  
  export default RedesSociales;
  