import React from 'react'
import ReactPlayer from "react-player"



const PalabrasDecano = ()=> {
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
                 <div className="container-palabras-decano-contenido">
                       <ReactPlayer
                            className='react-player'
                            url="https://www.youtube.com/watch?v=jU0gv7LW7V0&t=19s"
                            width='100%'
                            height='100%'
                            controls={true}
                        />
                        <div className="container-palabras-decano-blur">
                            <img src={process.env.PUBLIC_URL +'/imagenes/pngegg.png'} style={{width: 'auto', height: '5rem'}}></img>
                            <p  className="container-palabras-decano-blur">

                            Agradecer a todos los colegas el honor concedido al elegirnos como representantes de la orden médica a nivel de Ica. Prometemos no decepcionarlos , junto al Consejo Directivo de la Región Ica trabajaremos para lograr mejores beneficios para nuestros médicos colegiados en la región Durante el periodo 2022-2024, desarrollaremos una gestión democrática, transparente, moderna y accesible para los médicos, poniendo por delante siempre el bienestar de la orden, bajo la sola exigencia de dar un mejor servicio, estar a disposición del médico y defender siempre el honor e integridad.El Consejo Regional IX de Ica es un órgano directivo del Colegio Médico del Perú en Ica de los médicos colegiados de todo el país, que actualmente cuenta con un local en sesión en uso
                            </p>
                        </div>
                </div>
            </div>

       

        </>   
      )  
  }
  
  
  export default PalabrasDecano;
  