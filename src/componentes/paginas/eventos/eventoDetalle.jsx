import React  from 'react'

import {useParams} from 'react-router-dom'


import Eventos from  "../../../data/eventos"

const informacion=Eventos


  
  
  const EventoDetalle = ()=> {

    const {id}=useParams()
  
        return(
          <>
            {
            informacion.map(c=>(     
                id===c.id? <SericiosItem  imagen={c.imgenDetalle}  tipo={c.tipo} description={c.description} contenido={c.contenido} fecha={c.fecha}  enlace={c.enlace}></SericiosItem>:null
            )) 
            }  
          </>   
        )  
    }
 


    const SericiosItem = ({imagen,description, tipo,contenido,enlace,fecha})=> {
  
  
        if(tipo==="EVENTO"){
          return(
            <>
            <div className="detalle-noticias">
                <h2>EVENTOS</h2>
                <div className="detalle-noticias-contenido" >
                <div className="detalle-cart-contenido">
                    <div className="detalle-cart-contenido-titulo">{description}</div>
                    <div className="detalle-cart-contenido-fecha">{fecha}</div>
                    <div className="">{contenido}</div>
                    <span className="detalle-cart-contenido-enlace-conteiner">Link de Participación 👇
                    <a href={enlace} className="detalle-cart-contenido-enlace"> {enlace}</a>
                    </span>

                  
                  </div>
                  <img className="detalle-noticias-contenido-imagem detalle-noticias-contenido-imagem1" src={imagen} alt={imagen}></img>
                  
                </div>
            </div>
            
            </>   
          )  
  
  
        }
         
  }
  
   
    
    export default EventoDetalle;
    
  