import React from 'react'
import Cart from '../moleculas/cart';


const ConstanciaEtica = ()=> {

    
      return(
        
        <>
        <div className="datos">
        <h2>CONSTANCIA DE ÉTICA</h2>
        <div className="conteiner-datos">
            <h2>PASOS</h2>
            <h4 className="contenido_cart_descripccion">1.- Pago en la oficina de caja:</h4> 
            <h4 className="contenido_cart_descripccion">S/25.00</h4> 
            <h4 className="contenido_cart_descripccion">2.- Deposito en el BBVA por constancia de ética a la siguiente cuenta:</h4> 
            <h4 className="contenido_cart_descripccion">S/10.00</h4> 
            <h4 className="contenido_cart_descripccion">3.- Solicitud dirigida al Decano del Consejo Regional (Oficina de Trámite Documentario)</h4> 
            
            

            <h4 className="contenido_cart_descripccion"></h4> 
            <div className="contenido-izquierda">
                <Cart></Cart>
            </div>

        </div>
        </div>
        
        </>   
      )  
  }
  
  
  export default ConstanciaEtica;