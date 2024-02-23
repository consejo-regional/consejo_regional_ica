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
                        <div className="titulo-contenido-banner-izquierda"></div>
                        <div className="titulo-contenido-banner-derecha">NUESTROS CONVENIOS</div>
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
                      <ConveniosItem  key={c.id} id={c.id} imagen={c.imagen} titulo={c.titulo} fecha={c.fecha} tipo={c.tipo} estado={c.estado} ></ConveniosItem>
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
  
    const ConveniosItem = ({id,imagen,titulo,fecha,tipo,estado})=> {
  
        if(tipo==="CONVENIO"){
          return(
            <>
            <div className="contenedor_separador" key={id}>
              <Link className="page-clase"  to={`/convenios/${id}`}   >
                <img className="imagen-page" src={process.env.PUBLIC_URL+`/`+imagen} alt={titulo}></img>
                <div className="page">
                  <div className="colors">{tipo}</div>
                  <div className="page-descripccion">{titulo}</div>
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
    
    export default ConveniosPage;
    
  