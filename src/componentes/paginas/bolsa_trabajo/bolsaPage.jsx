import React  from 'react'

import {Link} from 'react-router-dom'
import BolsaInformacion from  "../../../data/bolsaTrabajo"

const informacion=BolsaInformacion

  const BolsaTrabajo = ()=> {
  
        return(
  
         
          <>
          <div className="contenedor-page"  >
              <div className="contenedor-page-titulo">
                  <h4>Consejo Regional IX – ICA </h4>
                  <h1>BOLSA DE TRABAJO</h1>

           </div>
         
           <br/>
           <br/>
           <div className="contenedor_separador">
              <hr className="separador"></hr> 
            </div>
              <div className="contenedor_page_grid">
                  {
  
                    informacion.map(c=>(
                      <BolsaTrabajoItem id={c.id} imagen={c.imagen} description={c.description} fecha={c.fecha} tipo={c.tipo} ></BolsaTrabajoItem>
                    ))
  
                    
                  }   
              </div>
          </div>
          </>   
        )  
    }
  
  
    const BolsaTrabajoItem = ({id,imagen,description,fecha,tipo})=> {
  
  
        if(tipo==="BOLSATRABAJO"){
          return(
            <>
           <div className="contenedor_separador">

            <Link className="page-clase"  to={`/bolsatrabajo/${id}`} >
              <img className="imagen-page" src={process.env.PUBLIC_URL+`/`+ imagen} alt={imagen}></img>
              {/* <div className="colors">{tipo}</div> */}
              <div className="page">
                <div className="page-descripccion">{description}</div>
                <div className="page-descripccion">{fecha}</div>
                <div className="page-estado">Leer Mas</div>

              </div>
            </Link>

            <hr className="separador"></hr> 
            </div>

            </>   
          )  
  
  
        }
         
  }
  
  
  
  
  
  
   
    
    export default BolsaTrabajo;
    
  