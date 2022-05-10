import React , {useEffect} from 'react'
import imagen1 from '../../assets/imagenes/eventos/IMAGE-1.png'
import imagen2 from '../../assets/imagenes/eventos/IMAGE-2.png'
import imagen3 from '../../assets/imagenes/eventos/IMAGE-3.png'
import imagen4 from '../../assets/imagenes/eventos/IMAGE-4.png'
import imagen5 from '../../assets/imagenes/eventos/EVENTO1.png'
import imagenContenido1 from '../../assets/imagenes/noticias/noticia1.JPG'
import imagenContenido2 from '../../assets/imagenes/noticias/noticia2.JPG'
import {Link} from 'react-router-dom'





const informacion=[{
    imagen:imagen5,
    description:"Reunion Multisectorial – 09 mayo",
    fecha:"2022/05/09",
    tipo:"NOTICIA",
    contenido:"El Dr. Luis Felipe Muñante Aparcana, Decano del Consejo Regional IX - Ica y el Dr. Orlando Anicama Zapata miembro del Comité de Salud Pública y el Sr. José Ascencio Anicama Alcalde del Distrito de Tate sostuvieron una Reunión Multisectorial para combatir los casos de Dengue. Así mismo el Decano reiteró el apoyo técnico en toda acción que se debe llevar a cabo para cuidar la salud de todo el pueblo de Tate.",
    imagenContenido1:imagenContenido1,
    imagenContenido2:imagenContenido2
  },{
    imagen:imagen2,
    description:"Habla con tu médico – 20 abril",
    fecha:"2002/15/14",
    tipo:"EVENTO"
  },{
    imagen:imagen3,
    description:"Habla con tu médico – 20 abril",
    fecha:"2021/15/24",
    tipo:"EVENTO"
  },{
    imagen:imagen4,
    description:"Habla con tu médico – 20 abril",
    fecha:"2015/30/15",
    tipo:"EVENTO"
  }]
  
  
  
  const ComunicacionesNoticia = ()=> {
  
        return(
          <>
          <div className="contenedor-eventos"  >
              <div className="contenedor-evento-titulo">
       
                  <h1>NOTICIAS</h1>
              </div>
              <div className="contenedor_eventos_grid">
                  {
  
                    informacion.map(c=>(
                    <SericiosItem  imagen={c.imagenContenido1} description={c.description} fecha={c.fecha} tipo={c.tipo} contenido={c.contenido}></SericiosItem>
                    ))
  
                    
                  }   
              </div>
          </div>
          </>   
        )  
    }
  
  
    const SericiosItem = ({imagen,description,fecha,tipo,contenido})=> {
  
  
        if(tipo=="NOTICIA"){
          return(
            <>
           
            <div className="eventos-clase" >
              <img className="imagen-evento" src={imagen} alt={imagen}></img>
              <div className="evento-noticia">
                <div className="evento-noticia-descripccion colors">{tipo}</div>
                <div className="evento-noticia-descripccion">{description}</div>
                <div className="evento-noticia-descripccion">{fecha}</div>
                <div className="evento-noticia-descripccion">{contenido}</div>
              </div>
            </div>
            </>   
          )  
  
  
        }
         
  }
  
  
  
  
  
  
   
    
    export default ComunicacionesNoticia;
    
  