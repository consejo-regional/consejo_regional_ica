import React  from 'react'
import {Link} from 'react-router-dom'
import {useEffect,useState} from "react"
import { ProgressBar } from  'react-loader-spinner'
import { Wave } from "react-animated-text";



const BolsaTrabajo = ()=> {

  const[informacion,setInformacion]=useState()
  useEffect(()=>{
      fetch("https://api.cmpica.org.pe/api/bolsa_trabajo/read.php")
      .then((res) => res.json())
      .then(
          // data=>console.log(data)
          data=>setInformacion(data)
      );
  },[])

  
        return(
          <>

          <div className="container-imagen-banner">
                <div className="conteiner-imagen-banner-blur">
                    <div className="logo-banner">
                        <div className="logo-banner-svg"></div>
                    </div>
                    <div className="titulo-contenido-banner">
                        <div className="titulo-contenido-banner-izquierda">BOLSA DE</div>
                        <div className="titulo-contenido-banner-derecha">TRABAJO</div>
                    </div>

                </div>

            </div>


          <div className="contenedor-page"  >
              {/* <div className="contenedor-page-titulo">
                  <h4>Consejo Regional IX – ICA </h4>
                  <h1>BOLSA DE TRABAJO</h1>

               </div> */}
         
           <br/>
           <br/>
           <div className="contenedor_separador">
              <hr className="separador"></hr> 
            </div>
              <div className="contenedor_page_grid">
                  {
                    informacion
                    ?
                    informacion.map(c=>(
                      <BolsaTrabajoItem id={c.id} imagen={c.imagen} description={c.description} fecha={c.fecha} tipo={c.tipo} ></BolsaTrabajoItem>
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
  
  
    const BolsaTrabajoItem = ({id,imagen,description,fecha,tipo})=> {
  
  
        if(tipo==="BOLSATRABAJO"){
          return(
            <>
           <div className="contenedor_separador">

            <Link className="page-clase"  to={`/bolsatrabajo/${id}`} >
              <img className="imagen-page" src={process.env.PUBLIC_URL+`/`+ imagen} alt={imagen}></img>
              {/* <div className="colors">{tipo}</div> */}
              <div className="page">
                <div className="page-descripccion">{description}</div>
                <div className="page-descripccion">{fecha}</div>
                <div className="page-estado">Leer Mas</div>

              </div>
            </Link>

            <hr className="separador"></hr> 
            </div>

            </>   
          )  
  
  
        }
         
  }
  
  
  
  
  
  
   
    
    export default BolsaTrabajo;
    
  