import React  from 'react'

import {Link} from 'react-router-dom'
// import EfemeridesInformacion from  "../../../data/efemerides"
import {useEffect,useState} from "react"

// const informacion=EfemeridesInformacion

  const Efemerides = ()=> {




    const[informacion,setInformacion]=useState([])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_URL_API}efemerides/read.php`)
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])
  
        return(
  
         
          <>


<div className="container-imagen-banner">
                <div className="conteiner-imagen-banner-blur">
                    <div className="logo-banner">
                        <div className="logo-banner-svg"></div>
                    </div>
                    <div className="titulo-contenido-banner">
                        <div className="titulo-contenido-banner-izquierda"></div>
                        <div className="titulo-contenido-banner-derecha">EFEMERIDES</div>
                    </div>

                </div>

            </div>

          <div className="contenedor-page"  >
           <div className="contenedor_separador">
              <hr className="separador"></hr> 
            </div>
              <div className="contenedor_page_grid">
                  {
  
                    informacion.map(c=>(
                      <EfemeridesItem id={c.id} imagen={c.imagen} description={c.description} fecha={c.fecha} tipo={c.tipo} ></EfemeridesItem>
                    ))
  
                    
                  }   
              </div>
          </div>
          </>   
        )  
    }
  
  
    const EfemeridesItem = ({id,imagen,description,fecha,tipo})=> {
  
  
        if(tipo==="EFEMERIDES"){
          return(
            <>
           <div className="contenedor_separador">

            <Link className="page-clase"  to={`/comunicaciones/efemerides/${id}`} >
              <img className="imagen-page" src={process.env.PUBLIC_URL+`/`+ imagen} alt={description}></img>
              <div className="colors">{tipo}</div>
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
  
  
  
  
  
  
   
    
    export default Efemerides;
    
  