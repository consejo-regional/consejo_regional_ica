import React from 'react'
//import Cart from '../moleculas/cart';


const ConstanciaHabilidad = ()=> {

    
      return(
        
        <>
        <div className="datos">
        {/* <h2>CONSTANCIA DE HABILIDAD</h2> */}
          <div className="container-descripccion-colegio">
              <h4>SOLICITADA POR UN MÉDICO</h4>
              <p className="contenido_cart_descripccion">La primera sin costo</p> 
              <p className="contenido_cart_descripccion">La segunda 10 soles </p> 
              <div className="contenido-izquierda">
              </div>
          </div>
          
          <div className="container-descripccion-colegio">
              <h4>SOLICITADA POR OTRO MÉDICO O UN FAMILIAR</h4>
              <p className="contenido_cart_descripccion">La primera sin costo</p> 
              <p className="contenido_cart_descripccion">La segunda 10 soles</p> 
              <p className="contenido_cart_descripccion">Previa presentación de una carta poder simple del titular</p> 
              <p className="contenido_cart_descripccion">Copia del DNI</p> 
              <p className="contenido_cart_descripccion">Copia del carné de colegiado</p> 
              
              <div className="contenido-izquierda">
              </div>
          </div>

          <div className="container-descripccion-colegio">
              <h4>SOLICITADA POR INSTITUCIONES PÚBLICAS (ESSALUD, FFAA, MINSA Y OTROS)</h4>
              <p className="contenido_cart_descripccion">S/15 soles </p> 
              <p className="contenido_cart_descripccion">Previa carta de presentación de la institución pública</p> 
              <p className="contenido_cart_descripccion">Solicitada por instituciones privadas</p> 
              <p className="contenido_cart_descripccion">S/ 15 soles</p> 
              <p className="contenido_cart_descripccion">Todas las empresas que solicitan las habilidades de sus médicos pagan el cargo de 2 soles, incluso si el propietario de la misma es un médico.
  Previa carta de presentación de la misma institución privada
              </p> 
              <div className="contenido-izquierda">
              </div>
          </div>


        </div>
        
        </>   
      )  
  }
  
  
  export default ConstanciaHabilidad;