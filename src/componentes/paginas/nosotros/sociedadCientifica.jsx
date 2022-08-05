import React from 'react'
//import Cart from '../moleculas/cart';


const SociedadCientifica = ()=> {

    var contenido = {
        titulo: 'SOCIEDADES CIENTÍFICAS',
        descripccion: ''
    }
      return(
        
        <>
        <div className="datos">
        <h2>{contenido.titulo}</h2>
        <div className="conteiner-datos">
            <h4 className="contenido_cart_descripccion">{contenido.descripccion}</h4> 
            <div className="contenido-izquierda">
            </div>

        </div>
        </div>
        
        </>   
      )  
  }
  
  
  export default SociedadCientifica;