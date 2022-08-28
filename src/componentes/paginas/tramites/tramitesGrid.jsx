import React from 'react'
import {useEffect,useState} from "react"


const TramitesGrid = ()=> {


    const[informacion,setInformacion]=useState([])
      useEffect(()=>{
          fetch("https://api.cmpica.org.pe/api/tramites/read.php")
          .then((res) => res.json())
          .then(
              // data=>console.log(data)
              data=>setInformacion(data)
          );
      },[])


      return(
        <>
        <div className="contenedor_servicios_grid_conteiner">
        <div className="contenedor-evento-titulo">
                <h4>Consejo Regional IX – ICA </h4>
                <h1>TRAMITES</h1>
        </div>
          <div className="contenedor_servicios_grid">
            {
              informacion.map(c=>(
                <SericiosItem imagen={c.imagen} nombre={c.nombre} description={c.description} enlace={c.enlace}></SericiosItem>
              ))
            }
            
          </div>
        </div>
        </>   
      )  
  }

  const SericiosItem = ({imagen,nombre,description,enlace})=> {
    return(
      <>
      <a href={enlace} rel="noreferrer" target="_blank" className="contenedor_servicios_item">
        <img className="servicios imagen" src={process.env.PUBLIC_URL+`/`+imagen} alt={nombre}></img>
        <div className="servicios-nombre">{nombre}</div>
        <div className="servicios-description">{description}</div>
      </a>
      </>   
    )  
}
  
  
  export default TramitesGrid;
  