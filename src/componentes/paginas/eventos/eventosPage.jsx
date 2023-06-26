import React  from 'react'
import {Link} from 'react-router-dom'
import { useEffect,useState } from "react";
import { ProgressBar } from  'react-loader-spinner'
import { Wave } from "react-animated-text";


function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

  const EventosPage = ()=> {

    const[informacion,setInformacion]=useState()
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_URL_API}eventos/read.php`)
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])
  

        return(
          <>

          <ScrollToTopOnMount />

          <div className="container-imagen-banner">
                <div className="conteiner-imagen-banner-blur">
                    <div className="logo-banner">
                        <div className="logo-banner-svg"></div>
                    </div>
                    <div className="titulo-contenido-banner">
                        <div className="titulo-contenido-banner-izquierda">NUESTROS</div>
                        <div className="titulo-contenido-banner-derecha">EVENTOS</div>
                    </div>

                </div>

            </div>




          <div className="contenedor-page"  >
              
              <div className="contenedor_separador">
              <hr className="separador"></hr> 
              </div>
              <div className="contenedor_page_grid">
                  
                  {
                    informacion
                    ?
                    informacion.map(c=>(
                      <EventosItem id={c.id} imagen={c.imagen} description={c.description} fecha={c.fecha} tipo={c.tipo} estado={c.estado}></EventosItem>
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
  
  
    const EventosItem = ({ id,imagen,description,fecha,tipo,estado})=> {
  
  
        if(tipo==="EVENTO"){
          return(
            <>
            <div className="contenedor_separador">

            <Link className="page-clase" to={`/eventos/${id}`} >
              <img className="imagen-page" src={process.env.PUBLIC_URL+`/`+ imagen} alt={description}></img>
              <div className="page">
                <div className="page-descripccion colors">{tipo}</div>
                <div className="page-descripccion">{description}</div>
                <div className="page-descripccion">{fecha}</div>
                <div className="page-estado">{estado}</div>
              </div>
            </Link>

            <hr className="separador"></hr> 
            </div>
            </>   
          )  
  
  
        }
         
  }
  

    
    export default EventosPage;



