import React  from 'react'

import {useParams} from 'react-router-dom'
import BolsaInformacion from  "../../../data/bolsaTrabajo"



const informacion=BolsaInformacion

  
  
  const BolsaDetalle = ()=> {

    const {id}=useParams()
  
        return(
          <>
            {
            informacion.map(c=>(     
                id===c.id? <BolsaItem  imagen={c.imgenDetalles}  tipo={c.tipo} description={c.description} contenido={c.contenido} fecha={c.fecha} ></BolsaItem>:null
            )) 
            }  
          </>   
        )  
    }
 


    const BolsaItem = ({imagen,description, tipo,contenido,fecha})=> {
  
  
        if(tipo==="BOLSATRABAJO"){
          return(
            <>
            <div className="detalle-grid">
                <h2>NOTICIAS</h2>
                <div className="detalle-grid-contenido" >
                <div className="detalle-cart-contenido">
                    <div className="detalle-cart-contenido-titulo">{description}</div>
                    <div className="detalle-cart-contenido-fecha">{fecha}</div>
                    <div className="">{contenido}</div>
                  
                  </div>
                  <div className="detalle-grid-contenido-imagenes">
                    {
                      imagen.map(c=>(
                            <img className="detalle-grid-contenido-imagem" src={process.env.PUBLIC_URL+`/`+ c} alt={c}></img> 

                      ))
                    }

                  </div>
                 
                </div>
            </div>
            
            </>   
          )  
  
  
        }
         
  }
  
   
    
    export default BolsaDetalle;
    
  