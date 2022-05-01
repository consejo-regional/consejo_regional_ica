import React from 'react'
import imagen1 from '../../assets/imagenes/IMAGE-1.png'
import imagen2 from '../../assets/imagenes/IMAGE-2.png'
import imagen3 from '../../assets/imagenes/IMAGE-3.png'
import imagen4 from '../../assets/imagenes/IMAGE-4.png'
import imagen5 from '../../assets/imagenes/IMAGE-5.png'
import imagen6 from '../../assets/imagenes/IMAGE-6.png'
import imagen7 from '../../assets/imagenes/IMAGE-7.png'


const SericiosGrid = ()=> {
      return(
        <>
        <div className="contenedor_servicios_grid_conteiner">
          <h1>NUESTROS SERVICIOS</h1>
          <div className="contenedor_servicios_grid">
              <SericiosItem imagen={imagen1} nombre="BOLSA DE TRABAJO" description="Educación Médica"></SericiosItem>
              <SericiosItem imagen={imagen2} nombre="BOLSA DE TRABAJO" description="Educación Médica"></SericiosItem>
              <SericiosItem imagen={imagen3} nombre="BOLSA DE TRABAJO" description="Educación Médica"></SericiosItem>
              <SericiosItem imagen={imagen4} nombre="BOLSA DE TRABAJO" description="Educación Médica"></SericiosItem>
              <SericiosItem imagen={imagen5} nombre="BOLSA DE TRABAJO" description="Educación Médica"></SericiosItem>
              <SericiosItem imagen={imagen6} nombre="BOLSA DE TRABAJO" description="Educación Médica"></SericiosItem>
              <SericiosItem imagen={imagen7} nombre="BOLSA DE TRABAJO" description="Educación Médica"></SericiosItem>
              <SericiosItem imagen={imagen1} nombre="BOLSA DE TRABAJO" description="Educación Médica"></SericiosItem>
              <SericiosItem imagen={imagen1} nombre="BOLSA DE TRABAJO" description="Educación Médica"></SericiosItem>
              <SericiosItem imagen={imagen1} nombre="BOLSA DE TRABAJO" description="Educación Médica"></SericiosItem>
           
          </div>
        </div>
        </>   
      )  
  }

  const SericiosItem = ({imagen,nombre,description})=> {
    return(
      <>
      <div className="contenedor_servicios_item">
        <img className="servicios imagen" src={imagen} alt={imagen}></img>
        <div className="servicios-nombre">{nombre}</div>
        <div className="servicios-description">{description}</div>
      </div>
      </>   
    )  
}
  
  
  export default SericiosGrid;
  