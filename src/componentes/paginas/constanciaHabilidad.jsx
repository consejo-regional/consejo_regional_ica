import React from 'react'
import Cart from '../moleculas/cart';


const ConstanciaHabilidad = ()=> {

    
      return(
        
        <>
        <div className="datos">
        <h2>CONSTANCIA DE HABILIDAD</h2>
        <div className="conteiner-datos">
            <h2>SOLICITADA POR UN MÉDICO</h2>
            <h4 className="contenido_cart_descripccion">La primera sin costo</h4> 
            <h4 className="contenido_cart_descripccion">La segunda 10 soles </h4> 
            <h2>SOLICITADA POR OTRO MÉDICO O UN FAMILIAR</h2>
            <h4 className="contenido_cart_descripccion">La primera sin costo</h4> 
            <h4 className="contenido_cart_descripccion">La segunda 10 soles</h4> 
            <h4 className="contenido_cart_descripccion">Previa presentación de una carta poder simple del titular</h4> 
            <h4 className="contenido_cart_descripccion">Copia del DNI</h4> 
            <h4 className="contenido_cart_descripccion">Copia del carné de colegiado</h4> 
            <h2>SOLICITADA POR INSTITUCIONES PÚBLICAS (ESSALUD, FFAA, MINSA Y OTROS)</h2>
            <h4 className="contenido_cart_descripccion">S/15 soles </h4> 
            <h4 className="contenido_cart_descripccion">Previa carta de presentación de la institución pública</h4> 
            <h4 className="contenido_cart_descripccion">Solicitada por instituciones privadas</h4> 
            <h4 className="contenido_cart_descripccion">S/ 15 soles</h4> 
            <h4 className="contenido_cart_descripccion">Todas las empresas que solicitan las habilidades de sus médicos pagan el cargo de 2 soles, incluso si el propietario de la misma es un médico.
Previa carta de presentación de la misma institución privada
            </h4> 

            <h4 className="contenido_cart_descripccion"></h4> 
            <div className="contenido-izquierda">
                <Cart></Cart>
            </div>

        </div>
        </div>
        
        </>   
      )  
  }
  
  
  export default ConstanciaHabilidad;