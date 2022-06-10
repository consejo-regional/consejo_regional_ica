import React from 'react'

import Servicios from '../../database/servicios'


const servicios=Servicios


const SericiosGrid = ()=> {
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
      <a href={enlace} target="_blank" className="contenedor_servicios_item">
        <img className="servicios imagen" src={imagen} alt={imagen}></img>
        <div className="servicios-nombre">{nombre}</div>
        <div className="servicios-description">{description}</div>
      </a>
      </>   
    )  
}
  
  
  export default SericiosGrid;
  