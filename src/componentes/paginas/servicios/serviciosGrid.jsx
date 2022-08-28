import React,{useEffect,useState} from 'react'

import AOS from "aos";
import "aos/dist/aos.css";



const SericiosGrid = ()=> {

    const[informacion,setInformacion]=useState([])

      useEffect(()=>{
        AOS.init({duration:1500})
        fetch("https://api.cmpica.org.pe/api/servicios/read.php")
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
              informacion.map(c=>(
                <SericiosItem key={c.id} imagen={c.imagen} nombre={c.nombre} description={c.description} enlace={c.enlace}></SericiosItem>
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
        <img className="servicios imagen" src={process.env.PUBLIC_URL+`/`+ imagen} alt={nombre}></img>
        <div className="servicios-nombre">{nombre}</div>
        <div className="servicios-description">{description}</div>
      </a>
      </>   
    )  
}
  
  
  export default SericiosGrid;
  