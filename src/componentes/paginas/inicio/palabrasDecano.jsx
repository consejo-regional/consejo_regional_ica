import React from 'react'



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
                <img alt='decano' className='bienvenida_decano-palabras-imagen' src={process.env.PUBLIC_URL + `/directivos/DECANO.png`}/>
                <div className="container-palabras-decano-blur">
                    Agradecer a todos los colegas el honor concedido al elegirnos como representantes de la orden médica a nivel de Ica. Prometemos no decepcionarlos , junto al Consejo Directivo de la Región Ica trabajaremos para lograr mejores beneficios para nuestros médicos colegiados en la región Durante el periodo 2022-2024, desarrollaremos una gestión democrática, transparente, moderna y accesible para los médicos, poniendo por delante siempre el bienestar de la orden, bajo la sola exigencia de dar un mejor servicio, estar a disposición del médico y defender siempre el honor e integridad.El Consejo Regional IX de Ica es un órgano directivo del Colegio Médico del Perú en Ica de los médicos colegiados de todo el país, que actualmente cuenta con un local en sesión en uso
                </div>
            </div>
        </div>

       

        </>   
      )  
  }
  
  
  export default PalabrasDecano;
  