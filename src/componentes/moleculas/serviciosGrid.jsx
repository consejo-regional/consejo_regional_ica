import React from 'react'


const SericiosGrid = ()=> {
      return(
        <>
        <div className="contenedor_servicios_grid">
            <SericiosItem imagen="../../../assets/imagenes/IMAGE-1.jpg" nombre="jhadiel" description="estudiante"></SericiosItem>
            
        </div>
        </>   
      )  
  }

  const SericiosItem = ({imagen,nombre,description})=> {
    return(
      <>
      <div className="contenedor_servicios_item">
        <img src="../../../assets/imagenes/IMAGE-1.jpg" alt={imagen}></img>
      </div>
      </>   
    )  
}
  
  
  export default SericiosGrid;
  