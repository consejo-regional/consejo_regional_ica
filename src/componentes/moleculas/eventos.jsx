import React from 'react'
import imagen1 from '../../assets/imagenes/eventos/IMAGE-1.png'
import imagen2 from '../../assets/imagenes/eventos/IMAGE-2.png'
import imagen3 from '../../assets/imagenes/eventos/IMAGE-3.png'
import imagen4 from '../../assets/imagenes/eventos/IMAGE-4.png'





const informacion=[{
  imagen:imagen1,
  description:"Habla con tu médico – 20 abril",
  fecha:"2022/03/16"
},{
  imagen:imagen2,
  description:"Habla con tu médico – 20 abril",
  fecha:"2002/15/14"
},{
  imagen:imagen3,
  description:"Habla con tu médico – 20 abril",
  fecha:"2021/15/24"
},{
  imagen:imagen4,
  description:"Habla con tu médico – 20 abril",
  fecha:"2015/30/15"
}]



const Eventos = ()=> {
      return(
        <>
        <div className="contenedor-eventos">
            <div className="contenedor-evento-titulo">
                <h4>Consejo Regional IX – ICA </h4>
                <h1>CURSOS / EVENTOS</h1>
            </div>
            <div className="contenedor_eventos_grid">
                {

                  informacion.map(c=>(
                    <SericiosItem  imagen={c.imagen} description={c.description} fecha={c.fecha} ></SericiosItem>
                  ))

                  
                }   
            </div>
        </div>
        </>   
      )  
  }


  const SericiosItem = ({imagen,description,fecha})=> {
        return(
          <>
          <div className="eventos-clase">
            <img className="imagen-evento" src={imagen} alt={imagen}></img>
            <div className="evento-noticia">
              <div className="evento-noticia-descripccion colors">EVENTOS / NOTICIAS</div>
              <div className="evento-noticia-descripccion">{description}</div>
              <div className="evento-noticia-descripccion">{fecha}</div>
            </div>
          </div>
          </>   
        )  
}






 
  
  export default Eventos;
  