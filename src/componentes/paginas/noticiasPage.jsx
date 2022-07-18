import React,{useEffect}  from 'react'

import {Link} from 'react-router-dom'
import Informacion from  "../../database/noticia"
//import Slider from '../moleculas/slider/Slider'
import SliderNoticias from '../moleculas/slider/sliderNoticias'
import AOS from "aos";
import "aos/dist/aos.css";

const informacion=Informacion

  const Comunicaciones = ()=> {
  


    useEffect(()=>{
     // AOS.init({duration: 400  })

     },[])

        return(
  
         
          <>
          <div className="contenedor-eventos"  >
              <div className="contenedor-evento-titulo">
                  <h4>Consejo Regional IX – ICA </h4>
                  <h1>NOTICIAS</h1>
           </div>
           
{/* 
           <SliderNoticias></SliderNoticias> */}
           <br/>
           <br/>
           <br/>
           <div className="contenedor_separador">
              <hr className="separador"></hr> 
            </div>
              <div className="contenedor_eventos_grid">
                  {
  
                    informacion.map(c=>(
                      <SericiosItem id={c.id} imagen={c.imagen} description={c.description} fecha={c.fecha} tipo={c.tipo} ></SericiosItem>
                      ))
  
                    
                  }   
              </div>
          </div>
          </>   
        )  
    }
  
  
    const SericiosItem = ({id,imagen,description,fecha,tipo})=> {
  
  
        if(tipo==="NOTICIA"){
          return(
            <>
            <div className="contenedor_separador">
            <Link className="eventos-clase"  to={`/noticias/${id}`}   >
              <img className="imagen-evento" src={imagen} alt={imagen}></img>
              <div className="evento-noticia">
                <div className="colors">{tipo}</div>
                <div className="evento-noticia-descripccion">{description}</div>
                <div className="evento-noticia-descripccion">{fecha}</div>
                <div className="evento-noticia-estado">Leer Mas</div>

              </div>
            </Link>


           
              <hr className="separador"></hr> 
            </div>
            </>   
          )  
  
  
        }
         
  }
  
  
  
  
  
  
   
    
    export default Comunicaciones;
    
  