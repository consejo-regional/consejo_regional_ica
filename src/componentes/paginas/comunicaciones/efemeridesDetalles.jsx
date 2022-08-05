import React , {useEffect} from 'react'

import {useParams} from 'react-router-dom'
import EfemeridesInformacion from  "../../../database/efemerides"



const informacion=EfemeridesInformacion

  
  
  const EfemeridesDetalle = ()=> {

    const {id}=useParams()
  
        return(
          <>
            {
            informacion.map(c=>(     
                id==c.id? <SericiosItem  imagen={c.imgenDetalles}  tipo={c.tipo} description={c.description} contenido={c.contenido} fecha={c.fecha} ></SericiosItem>:null
            )) 
            }  
          </>   
        )  
    }
 


    const SericiosItem = ({imagen,description, tipo,contenido,fecha})=> {
  
  
        if(tipo=="EFEMERIDES"){
          return(
            <>
            <div className="detalle-noticias">
                <h2>NOTICIAS</h2>
                <div className="detalle-noticias-contenido" >
                <div className="detalle-cart-contenido">
                    <div className="detalle-cart-contenido-titulo">{description}</div>
                    <div className="detalle-cart-contenido-fecha">{fecha}</div>
                    <div className="">{contenido}</div>
                  
                  </div>
                  <div className="detalle-noticias-contenido-imagenes">
                    {
                      imagen.map(c=>(
                            <img className="detalle-noticias-contenido-imagem" src={c} alt={c}></img> 

                      ))
                    }

                  </div>
                 
                </div>
            </div>
            
            </>   
          )  
  
  
        }
         
  }
  
   
    
    export default EfemeridesDetalle;
    
  