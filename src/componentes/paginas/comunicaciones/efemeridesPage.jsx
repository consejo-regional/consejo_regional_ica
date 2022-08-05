import React  from 'react'

import {Link} from 'react-router-dom'
import EfemeridesInformacion from  "../../../data/efemerides"

const informacion=EfemeridesInformacion

  const Efemerides = ()=> {
  
        return(
  
         
          <>
          <div className="contenedor-eventos"  >
              <div className="contenedor-evento-titulo">
                  <h4>Consejo Regional IX – ICA </h4>
                  <h1>NOTICIAS</h1>

           </div>
         
           <br/>
           <br/>
           <div className="contenedor_separador">
              <hr className="separador"></hr> 
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
  
  
    const SericiosItem = ({id,imagen,description,fecha,tipo})=> {
  
  
        if(tipo==="EFEMERIDES"){
          return(
            <>
           <div className="contenedor_separador">

            <Link className="eventos-clase"  to={`/comunicaciones/efemerides/${id}`} >
              <img className="imagen-evento" src={imagen} alt={imagen}></img>
              <div className="colors">{tipo}</div>
              <div className="evento-noticia">
                <div className="evento-noticia-descripccion">{description}</div>
                <div className="evento-noticia-descripccion">{fecha}</div>
                <div className="evento-noticia-estado">Leer Mas</div>

              </div>
            </Link>

            <hr className="separador"></hr> 
            </div>

            </>   
          )  
  
  
        }
         
  }
  
  
  
  
  
  
   
    
    export default Efemerides;
    
  