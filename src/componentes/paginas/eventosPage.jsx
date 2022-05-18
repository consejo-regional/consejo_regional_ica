import React , {useEffect} from 'react'
import {Link} from 'react-router-dom'


import Eventos from  "../../database/eventos"

const informacion=Eventos


  
  const EventosPage = ()=> {
  
        return(
  
         
          <>
          <div className="contenedor-eventos"  >
              <div className="contenedor-evento-titulo">
                  <h4>Consejo Regional IX – ICA </h4>
                  <h1>EVENTO</h1>
              </div>
              <div className="contenedor_eventos_grid">
                  {
  
                    informacion.map(c=>(
                      <SericiosItem id={c.id} imagen={c.imagen} description={c.description} fecha={c.fecha} tipo={c.tipo} ></SericiosItem>
                    ))
  
                    
                  }   
              </div>
          </div>
          </>   
        )  
    }
  
  
    const SericiosItem = ({ id,imagen,description,fecha,tipo})=> {
  
  
        if(tipo=="EVENTO"){
          return(
            <>
           
            <Link className="eventos-clase" to={`/eventos/${id}`} >
              <img className="imagen-evento" src={imagen} alt={imagen}></img>
              <div className="evento-noticia">
                <div className="evento-noticia-descripccion colors">{tipo}</div>
                <div className="evento-noticia-descripccion">{description}</div>
                <div className="evento-noticia-descripccion">{fecha}</div>
              </div>
            </Link>
            </>   
          )  
  
  
        }
         
  }
  
  
  
  
  
  
   
    
    export default EventosPage;