import React from 'react'
import ReactPlayer from "react-player"

import {useEffect,useState} from "react"
import { ProgressBar } from  'react-loader-spinner'
import { Wave } from "react-animated-text";

const PalabrasDecano = ()=> {

    const[informacion,setInformacion]=useState([{url:'',descripccion:''}])
    useEffect(()=>{
        fetch( `${process.env.REACT_APP_URL_API}palabras_decano/read.php`)
        .then((res) => res.json())
        .then(
            data=>setInformacion(data)
        );
    },[])

      return(
        <>
            <div className="contenedor-serviciosGrid-titulo">
                <div className="contenedor-serviciosGrid-logo">
                    <div className="logo-colegio-svg"></div>
                </div>
                <div className="contenedor-serviciosGrid-contenido">
                    <div className="contenedor-serviciosGrid-contenido-conteiner">
                        <div className="contenedor-serviciosGrid-contenido1">PALABRAS DEL</div>
                        <div className="contenedor-serviciosGrid-contenido2">DECANO</div>
                    </div>
                </div>
            </div>

            <div className="container-palabras-decano">
                    {
                       
                    !informacion
                    ?
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
                    :
                    informacion.map(c=>(
                        <div className="container-palabras-decano-contenido">
                            <ReactPlayer
                                className='react-player'
                                url={c.url}
                                width='100%'
                                height='auto'
                                controls={true}
                            />
                            <div >
                                <img src={process.env.PUBLIC_URL +'/imagenes/pngegg.png'} style={{width: 'auto', height: '5rem'}}></img>
                                <p  className="container-palabras-decano-texto">
                                    {c.descripccion}
                                </p>
                            </div>
                        </div>
                    ))
                        
                    }
            </div>
        </>  
      )  
  }
  
  
  export default PalabrasDecano;
  