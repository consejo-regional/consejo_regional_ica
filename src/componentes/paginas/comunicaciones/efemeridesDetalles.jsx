import React  from 'react'

import {useParams} from 'react-router-dom'
// import EfemeridesInformacion from  "../../../data/efemerides"
import {useEffect,useState} from "react"



// const informacion=EfemeridesInformacion

  
  
  const EfemeridesDetalle = ()=> {


    const[informacion,setInformacion]=useState([])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_URL_API}efemerides/read.php`)
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])


    const {id}=useParams()
  
        return(
          <>
            {
            informacion.map(c=>(     
                id===(c.id).toString()? <EfemerideItem  key={c.id} imagenes={c.imagenDetalle}  tipo={c.tipo} description={c.description} contenido={c.contenido} fecha={c.fecha} ></EfemerideItem>:null
            )) 
            }  
          </>   
        )  
    }
 


    const EfemerideItem = ({imagenes,description, tipo,contenido,fecha})=> {
  
  
        if(tipo==="EFEMERIDES"){
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
                        imagenes.split(';').map(c=>(
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
  
   
    
    export default EfemeridesDetalle;
    
  