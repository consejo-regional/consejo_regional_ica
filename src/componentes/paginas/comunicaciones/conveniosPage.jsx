import React  from 'react'
import {Link} from 'react-router-dom'
import { ProgressBar } from  'react-loader-spinner'
import { Wave } from "react-animated-text";


import { useEffect,useState } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


  const ConveniosPage = ()=> {
    const[informacion,setInformacion]=useState()
    useEffect(()=>{
        fetch( `${process.env.REACT_APP_URL_API}convenios/read.php`)
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
                        <div className="titulo-contenido-banner-derecha">CONVENIOS</div>
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
                      <ConveniosItem  key={c.id} id={c.id} imagen={c.imagen} titulo={c.description} fecha={c.fecha} tipo={c.tipo} documento={c.documento} ></ConveniosItem>
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
  
    const ConveniosItem = ({id,imagen,titulo,fecha,tipo,documento})=> {
  
        if(tipo==="CONVENIO"){
          return(
            <>
              <div className="contenedor_separador" key={id}>
                      <div className="page-clase">  
                          <img className="imagen-page" src={process.env.PUBLIC_URL+`/`+imagen} alt={titulo}></img>
                          <div className="page">
                              <div className="colors">{tipo}</div>
                              <div className="page-descripccion">{titulo}</div>
                              {
                                documento!==""
                                ?
                                <a href={ process.env.PUBLIC_URL+ documento} target='_blank'>Descargar</a>
                                :
                                <div></div>
                              }
                              <div className="page-descripccion">{fecha}</div>
                              <Link   to={`/convenios/${id}`} >
                                <div className="page-estado">VER MAS</div>
                              </Link>
                          </div>
                      </div>
                <hr className="separador"></hr> 
              </div>
            </>   
          )    
        }
         
  }
    
    export default ConveniosPage;
    
  