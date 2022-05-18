import React , {useEffect} from 'react'

import {useParams} from 'react-router-dom'
import Informacion from  "../../database/noticia"



const informacion=Informacion

  
  
  const ComunicacionesDetalle = ()=> {

    const {id}=useParams()
  
        return(
          <>
            {
            informacion.map(c=>(     
                id==c.id? <SericiosItem  imagen={c.imgenDetalle}  tipo={c.tipo} description={c.description} contenido={c.contenido} fecha={c.fecha} ></SericiosItem>:null
            )) 
            }  
          </>   
        )  
    }
 


    const SericiosItem = ({imagen,description, tipo,contenido,fecha})=> {
  
  
        if(tipo=="NOTICIA"){
          return(
            <>
            <div className="detalle-noticias">
                <h2>NOTICIAS</h2>
                <div className="detalle-noticias-contenido" >
                  <img className="detalle-noticias-contenido-imagem" src={imagen} alt={imagen}></img>
                  <div className="detalle-cart-contenido">
                    <div className="detalle-cart-contenido-titulo">{description}</div>
                    <div className="detalle-cart-contenido-fecha">{fecha}</div>
                    <div className="">{contenido}</div>
                  
                  </div>
                </div>
            </div>
            
            </>   
          )  
  
  
        }
         
  }
  
   
    
    export default ComunicacionesDetalle;
    
  