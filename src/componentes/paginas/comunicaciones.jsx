import React , {useEffect} from 'react'
import imagen1 from '../../assets/imagenes/eventos/IMAGE-1.png'
import imagen2 from '../../assets/imagenes/eventos/IMAGE-2.png'
import imagen3 from '../../assets/imagenes/eventos/IMAGE-3.png'
import imagen4 from '../../assets/imagenes/eventos/IMAGE-4.png'
import imagen5 from '../../assets/imagenes/eventos/EVENTO1.png'
import imagen6 from '../../assets/imagenes/noticias/279898315_5322377587854906_1709060221371320153_n.png'
import imagen7 from '../../assets/imagenes/noticias/280588429_5322566121169386_7956253548694510244_n.png'
import imagen8 from '../../assets/imagenes/noticias/WhatsApp Image 2022-05-12 at 7.41.png'
import {Link} from 'react-router-dom'





const informacion=[{
    imagen:imagen5,
    description:"Reunion Multisectorial – 09 mayo",
    fecha:"2022/05/09",
    tipo:"NOTICIA"
  },{
    imagen:imagen7,
    description:"Prepara tu mochila de emergencia",
    fecha:"",
    tipo:"NOTICIA"
  },{
    imagen:imagen8,
    description:"Simposio Dia mundial de la hipertension",
    fecha:"",
    tipo:"NOTICIA"

  },{
    imagen:imagen6,
    description:"III simulacro Nacional",
    fecha:"2022/05/15",
    tipo:"NOTICIA"
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
  
  
  
  const Comunicaciones = ()=> {
  
        return(
  
         
          <>
          <div className="contenedor-eventos"  >
              <div className="contenedor-evento-titulo">
       
                  <h1>NOTICIAS</h1>
              </div>
              <div className="contenedor_eventos_grid">
                  {
  
                    informacion.map(c=>(
                      <SericiosItem  imagen={c.imagen} description={c.description} fecha={c.fecha} tipo={c.tipo} ></SericiosItem>
                    ))
  
                    
                  }   
              </div>
          </div>
          </>   
        )  
    }
  
  
    const SericiosItem = ({imagen,description,fecha,tipo})=> {
  
  
        if(tipo=="NOTICIA"){
          return(
            <>
           
            <Link className="eventos-clase"  to="/comunicaciones/noticias" >
              <img className="imagen-evento" src={imagen} alt={imagen}></img>
              <div className="evento-noticia">
                <div className="evento-noticia-descripccion colors">{tipo}</div>
                <div className="evento-noticia-descripccion">{description}</div>
                <div className="evento-noticia-descripccion">{fecha}</div>
              </div>
            </Link>
            </>   
          )  
  
  
        }
         
  }
  
  
  
  
  
  
   
    
    export default Comunicaciones;
    
  