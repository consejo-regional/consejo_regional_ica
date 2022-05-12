import React from 'react'
import Face from '../../assets/iconos/face'
import Sms from '../../assets/iconos/sms'
import Twitter from '../../assets/iconos/twitter'
import Watsup from '../../assets/iconos/watsup'


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
          {/* <Watsup></Watsup> */}
            
        </div>

        
       
        </>   
      )  
  }
  
  
  export default RedesSociales;
  