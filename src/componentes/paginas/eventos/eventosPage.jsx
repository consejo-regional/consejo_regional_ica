import React  from 'react'
import {Link} from 'react-router-dom'


import Eventos from  "../../../data/eventos"

const informacion=Eventos


  
  const EventosPage = ()=> {
  
        return(
  
         
          <>
          <div className="contenedor-page"  >
              <div className="contenedor-page-titulo">
                  <h4>Consejo Regional IX – ICA </h4>
                  <h1>EVENTO</h1>
              </div>
              <div className="contenedor_separador">
              <hr className="separador"></hr> 
              </div>
              <div className="contenedor_page_grid">
                  {
  
                    informacion.map(c=>(
                      <EventosItem id={c.id} imagen={c.imagen} description={c.description} fecha={c.fecha} tipo={c.tipo} estado={c.estado}></EventosItem>
                    ))
  
                    
                  }   
              </div>
          </div>
          </>   
        )  
    }
  
  
    const EventosItem = ({ id,imagen,description,fecha,tipo,estado})=> {
  
  
        if(tipo==="EVENTO"){
          return(
            <>
            <div className="contenedor_separador">

            <Link className="page-clase" to={`/eventos/${id}`} >
              <img className="imagen-page" src={imagen} alt={imagen}></img>
              <div className="page">
                <div className="page-descripccion colors">{tipo}</div>
                <div className="page-descripccion">{description}</div>
                <div className="page-descripccion">{fecha}</div>
                <div className="page-estado">{estado}</div>
              </div>
            </Link>

            <hr className="separador"></hr> 
            </div>
            </>   
          )  
  
  
        }
         
  }
  
  
  
  
  
  
   
    
    export default EventosPage;



