import React from 'react'
import JuntaDirectiva from '../paginas/juntaDirectiva';

const QuienesSomos = ()=> {
      return(
        <>
        <div className="contenedor_colegio">
            <div className="container-imagen-colegio">
                <div className="logo-colegio">
                    <div className="logo-colegio-svg"></div>
                </div>
                <div className="titulo-contenido-colegio">
                    <div className="titulo-contenido-colegio1">¿QUIENES</div>
                    <div className="titulo-contenido-colegio2">SOMOS?</div>
                </div>

            </div>

            <div className="container-descripccion-colegio">
                <h4>QUIENES SOMOS?</h4>
                <h4>El Colegio Médico del Perú (CMP) es una institución autónoma de derecho público interno, conformado por organismos democráticamente constituidos y representativo de la profesión médica en todo el territorio de la República.</h4>
                <h4>Surgió de esfuerzos organizativos gremiales y profesionales y se institucionalizó el 16 de octubre de 1964, al ser creado mediante Ley Nº 15173; modificada por D.L. 17239 del 29 de noviembre e instalándose su primer Consejo Nacional presidido por el primer Decano Dr. Jorge de la Flor Valle, en noviembre de 1969.</h4>
                <h4>Siendo la colegiación un requisito indispensable, el CMP incorpora obligatoriamente a todos los médico-cirujanos que se encuentren legalmente aptos para ejercer la profesión.</h4>
                <h4>El CMP tiene como misión fomentar el bienestar social y el trabajo decente de médicos y médicas, promover una reforma por el derecho a la salud y el acceso universal a la seguridad social, garantizar una formación y ejercicio profesional científica, humanista, basada en los principios ético-deontológicos de la profesión.</h4>
            </div>


            <br></br>

            <div className="container-imagen-colegio container-imagen-colegio1">
                <div className="logo-colegio">
                    <div className="logo-colegio-svg"></div>
                </div>
                <div className="titulo-contenido-colegio1">
                    <div className="titulo-contenido-colegio1 titulo-contenido-colegio11"> COMITÉ EJECUTIVO NACIONAL</div>
                    <div className="titulo-contenido-colegio2">PERIODO 2022-2024</div>
                </div>

            </div>

            
            <div className="container-descripccion-colegio">
            <JuntaDirectiva></JuntaDirectiva>
            </div>

          

        </div>
        </>   
      )  
  }
  
  
  export default QuienesSomos;