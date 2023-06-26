import React,{useEffect,useState} from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

import { ProgressBar } from  'react-loader-spinner'
import { Wave } from "react-animated-text";




const SericiosGrid = ()=> {

    const[informacion,setInformacion]=useState()

      useEffect(()=>{
        AOS.init({duration:1500})
        fetch(`${process.env.REACT_APP_URL_API}/servicios/read.php`)
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
      },[])

      return(
        <>
        <div className="contenedor_servicios_grid_conteiner">
          <div className="contenedor-serviciosGrid-titulo">
                <div className="contenedor-serviciosGrid-logo">
                    <div className="logo-colegio-svg"></div>
                </div>
                <div className="contenedor-serviciosGrid-contenido">
                  <div className="contenedor-serviciosGrid-contenido-conteiner">
                    <div className="contenedor-serviciosGrid-contenido1">SERVICIOS</div>
                    <div className="contenedor-serviciosGrid-contenido2">DESTACADOS</div>
                  </div>
                </div>
            </div>

          <div className="contenedor_servicios_grid">

          {

            informacion
            ?
            informacion.map(c=>(
              <SericiosItem key={c.id} imagen={c.imagen} nombre={c.nombre} description={c.description} enlace={c.enlace}></SericiosItem>
            ))
            :
            <div  className="contenedor_loader_central_contenido">
                      <Wave text="CARGANDO CONTENIDO ..." effect="fadeOut" effectChange={2.0} /> 
                      <ProgressBar
                          height="80"
                          width="80"
                          ariaLabel="progress-bar-loading"
                          wrapperStyle={{}}
                          wrapperClass="progress-bar-wrapper"
                          borderColor = '#D4D4D4'
                          barColor = '#B7B7B7'
                      />
                  </div>
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
        <img className="servicios imagen" src={process.env.PUBLIC_URL+`/`+ imagen} alt={nombre}></img>
        <div className="servicios-nombre">{nombre}</div>
        <div className="servicios-description">{description}</div>
      </a>
      </>   
    )  
}
  
  
  export default SericiosGrid;
  