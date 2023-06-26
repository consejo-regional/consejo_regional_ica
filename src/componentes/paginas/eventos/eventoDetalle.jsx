import React  from 'react'

import {useParams} from 'react-router-dom'
import {useEffect,useState} from "react"


  const EventoDetalle = ()=> {

    const {id}=useParams()

    const[informacion,setInformacion]=useState([])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_URL_API}eventos/read.php`)
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])
  
        return(
          <>
            {
            informacion.map(c=>(     
                id === (c.id).toString()? <SericiosItem  imagen={c.imagenDetalle}  tipo={c.tipo} description={c.description} contenido={c.contenido} fecha={c.fecha}  enlace={c.enlace}></SericiosItem>:null
            )) 
            }  
          </>   
        )  
    }
 


    const SericiosItem = ({imagen,description, tipo,contenido,enlace,fecha})=> {
  
  
        if(tipo==="EVENTO"){
          return(
            <>
            <div className="detalle-grid">
                <h2>EVENTOS</h2>
                <div className="detalle-grid-contenido" >
                <div className="detalle-cart-contenido">
                    <div className="detalle-cart-contenido-titulo">{description}</div>
                    <div className="detalle-cart-contenido-fecha">{fecha}</div>
                    <div className="">{contenido}</div>
                    <span className="detalle-cart-contenido-enlace-conteiner">Link de Participación 👇
                    <a href={enlace} className="detalle-cart-contenido-enlace"> {enlace}</a>
                    </span>

                  
                  </div>
                  <img className="detalle-grid-contenido-imagem detalle-noticias-contenido-imagem1" src={process.env.PUBLIC_URL+`/`+ imagen} alt={imagen}></img>
                  
                </div>
            </div>
            
            </>   
          )  
  
  
        }
         
  }
  
   
    
    export default EventoDetalle;
    
  