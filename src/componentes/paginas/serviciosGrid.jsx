import React,{useEffect} from 'react'

import Servicios from '../../database/servicios'
import AOS from "aos";
import "aos/dist/aos.css";

const servicios=Servicios


const SericiosGrid = ()=> {

      useEffect(()=>{
        AOS.init({duration:1500})
      },[])

      return(
        <>
        <div className="contenedor_servicios_grid_conteiner">
        <div className="contenedor-evento-titulo">
                <h4>Consejo Regional IX – ICA </h4>
                <h1>NUESTROS SERVICIOS</h1>
        </div>
          <div className="contenedor_servicios_grid">
            {
              servicios.map(c=>(
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
      <a href={enlace} target="_blank" rel="noreferrer" className="contenedor_servicios_item" data-aos="zoom-in">
        <img className="servicios imagen" src={imagen} alt={imagen}></img>
        <div className="servicios-nombre">{nombre}</div>
        <div className="servicios-description">{description}</div>
      </a>
      </>   
    )  
}
  
  
  export default SericiosGrid;
  