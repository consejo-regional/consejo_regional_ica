import React from 'react'
import imagen1 from '../../assets/imagenes/eventos/IMAGE-1.png'

const Eventos = ()=> {
      return(
        <>
        <div className="contenedor-eventos">
            <div className="contenedor-evento-titulo">
                <h5>Consejo Regional III - Lima</h5>
                <h1>CURSOS / EVENTOS</h1>
            </div>
            <div className="contenedor_eventos_grid">
                <SericiosItem imagen={imagen1}  description="Habla con tu médico – 20 abril"></SericiosItem>
                <SericiosItem imagen={imagen1}  description="Habla con tu médico – 20 abril"></SericiosItem>
                <SericiosItem imagen={imagen1}  description="Habla con tu médico – 20 abril"></SericiosItem>
                <SericiosItem imagen={imagen1}  description="Habla con tu médico – 20 abril"></SericiosItem>
                
            </div>
        </div>
        </>   
      )  
  }


const SericiosItem = ({imagen,description})=> {
  return(
    <>
    <div className="eventos-clase">
      <img className="imagen-evento" src={imagen} alt={imagen}></img>
      <div className="evento-noticia">
        <div className="evento-noticia-descripccion colors">EVENTOS / NOTICIAS</div>
        <div className="evento-noticia-descripccion">{description}</div>
      </div>
    </div>
    </>   
  )  
}






 
  
  export default Eventos;
  