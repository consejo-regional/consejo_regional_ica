import React  from 'react'

import {useParams} from 'react-router-dom'
import Informacion from  "../../../data/noticia"


import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}



const informacion=Informacion

  
  
  const ComunicacionesDetalle = ()=> {

    const {id}=useParams()
  
        return(
          <>

            <ScrollToTopOnMount />

            {
            informacion.map(c=>(     
                id===c.id? <SericiosItem  imagen={c.imgenDetalles}  tipo={c.tipo} description={c.description} contenido={c.contenido} fecha={c.fecha} ></SericiosItem>:null
            )) 
            }  
          </>   
        )  
    }
 


    const SericiosItem = ({imagen,description, tipo,contenido,fecha})=> {
  
  
        if(tipo==="NOTICIA"){
          return(
            <>
            <div className="detalle-grid">
                <h2 id="the-hash" name="the-hash">NOTICIAS.</h2>
                <div className="detalle-grid-contenido" >
                <div className="detalle-cart-contenido">
                    <div className="detalle-cart-contenido-titulo">{description}</div>
                    <div className="detalle-cart-contenido-fecha">{fecha}</div>
                    <div className="">{contenido}</div>
                  
                  </div>
                  <div className="detalle-grid-contenido-imagenes">
                    {
                      imagen.map(c=>(
                            <img className="detalle-grid-contenido-imagem" src={c} alt={c}></img> 

                      ))
                    }

                  </div>
                 
                </div>
            </div>
            
            </>   
          )  
  
  
        }
         
  }
  
   
    
    export default ComunicacionesDetalle;
    
  