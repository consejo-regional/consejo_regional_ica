import React  from 'react'
import {Link} from 'react-router-dom'
import Informacion from  "../../../data/noticia"

import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}



const informacion=Informacion

  const Comunicaciones = ()=> {
  
        return(
          <>
          <ScrollToTopOnMount />

          <div className="contenedor-page"  >
              <div className="contenedor-page-titulo">
                  <h4>Consejo Regional IX – ICA </h4>
                  <h1>NOTICIAS</h1>
           </div>
           <br/>
           <br/>
           <br/>
           <div className="contenedor_separador">
              <hr className="separador"></hr> 
            </div>
              <div className="contenedor_page_grid">
                  {
                    informacion.map(c=>(
                      <NoticiasItem id={c.id} imagen={c.imagen} description={c.description} fecha={c.fecha} tipo={c.tipo} ></NoticiasItem>
                      ))
                  }   
              </div>
          </div>
          </>   
        )  
    }
  
    const NoticiasItem = ({id,imagen,description,fecha,tipo})=> {
  
        if(tipo==="NOTICIA"){
          return(
            <>
            <div className="contenedor_separador">
              <Link className="page-clase"  to={`/noticias/${id}`}   >
                <img className="imagen-page" src={process.env.PUBLIC_URL+`/`+imagen} alt={description}></img>
                <div className="page">
                  <div className="colors">{tipo}</div>
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
    
    export default Comunicaciones;
    
  