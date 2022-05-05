import React from 'react'
import Cart from '../moleculas/cart';


const Biemvenida = ()=> {

    var contenido = {
        titulo: 'BIENVENIDA',
        descripccion: 'Agradecer a todos los colegas el honor concedido al elegirnos como representantes de la orden médica a nivel de Ica. Prometemos no decepcionarlos y, junto al Consejo Directivo de la Región Ica, trabajar para lograr mejores beneficios para nuestros médicos colegiados en la región Durante el periodo 2022-2024, desarrollaremos una gestión democrática, transparente, moderna y accesible para los médicos, poniendo por delante siempre el bienestar de la orden, bajo la sola exigencia de dar un mejor servicio, estar a disposición del médico y defender siempre el honor e integridad.El Consejo Regional IX de Ica es un órgano directivo del Colegio Médico del Perú en Ica de los médicos colegiados de todo el país, que actualmente cuenta con un local en sesión en uso, el objetivo de esta gestión es tener el ansiado título de propiedad de nuestro local institucional para seguir construyendo beneficios y asegurar la atención de nuestros colegiados'
    }
      return(
        
        <>
        <div className="datos">
        <h2>{contenido.titulo}</h2>
        <div className="conteiner-datos">
            <h4 className="contenido_cart_descripccion">{contenido.descripccion}</h4> 
            <div className="contenido-izquierda">
                <Cart></Cart>
            </div>

        </div>
        </div>
        
        </>   
      )  
  }
  
  
  export default Biemvenida;
  