import React from 'react'
import {useEffect,useState} from "react"
import { ProgressBar } from  'react-loader-spinner'
import { Wave } from "react-animated-text";

const Normativo = ()=> {


  

    const[informacion,setInformacion]=useState([])
    useEffect(()=>{
        fetch( `${process.env.REACT_APP_URL_API}documentos_normativos/read.php`)

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
                        <div className="titulo-contenido-banner-izquierda"></div>
                        <div className="titulo-contenido-banner-derecha">NORMATIVO</div>
                    </div>
                </div>
        </div>


        <div className="container-descripccion-colegio">
                <div className="grid-documentos">
                {
                  informacion
                  ?
                    informacion.map(c=>(
                    <div className="grid-documentos-contenidos">
                        <div>{c.nombre}</div>
                        <div>{c.fecha} </div>
                        <h5>Descargar</h5>
                        <a href={process.env.PUBLIC_URL+c.enlace} target='_blank'>
                            <div className="imagen-grid-contenidos-contenidos"></div>
                        </a>
                    </div>
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

  
  export default Normativo;
  