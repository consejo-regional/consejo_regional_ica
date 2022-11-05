import React from "react"
import ReactPlayer from "react-player"
import {useEffect,useState} from "react"
import { ProgressBar } from  'react-loader-spinner'
import { Wave } from "react-animated-text";




const GaleriaVideos = ()=>{

    const[informacion,setInformacion]=useState()
    useEffect(()=>{
        fetch("https://api.cmpica.org.pe/api/galery/read.php")
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    }
    
    ,[])


return(
    <>
        <div className="contenedor_videos_central">

        <div className="container-imagen-banner">
                <div className="conteiner-imagen-banner-blur">
                    <div className="logo-banner">
                        <div className="logo-banner-svg"></div>
                    </div>
                    <div className="titulo-contenido-banner">
                        <div className="titulo-contenido-banner-izquierda">GALERIA</div>
                        <div className="titulo-contenido-banner-derecha">CURSOS</div>
                    </div>

                </div>

            </div>

            <div className="contenedor_videos">

                {
                  informacion
                  ?
                    informacion.map(c=>(
                        <div className="contenedor_videos_individual" key={c.id}>
                        <ReactPlayer
                            className='react-player'
                            url={c.url}
                            width='100%'
                            height='100%'
                            controls={true}
                            />
                            <div className='contenedor_videos_individual_titulo'> {c.titulo}</div>
                            <div className='contenedor_videos_individual_titulo'> {c.fecha}</div>
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




export default  GaleriaVideos