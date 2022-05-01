import React from 'react'
import mapa from '../../assets/imagenes/mapa.png'


const FooterContacto = ()=> {
      return(
        <>
        <div className="contenedor_footer_contacto">

            <div className="contenedor-evento-titulo">
                <h4>Consejo Regional III - ICA</h4>
                <h1>CONTACTENOS</h1>
            </div>

            <div className="footerContacto">
                <div className="footerContactoDescripccion">
                    <h4>Consejo Regional – ICA CMP</h4>
                    <h3>El Colegio Médico del Perú (CMP) es una institución autónoma de derecho público interno, representativa de la profesión médica en todo el territorio de la República. El Consejo Regional III de Lima (CR III) es el órgano directivo del CMP en Lima Metropolitana y representa a más del 50% de los médicos colegiados del Perú.</h3>
                    <h4>Contáctenos</h4>
                    <h4>Malecón de la Reserva 791</h4>
                    <h4>recepcion@cmplima.org.pe</h4>
                </div>


                <img src={mapa} className="imgFooter"></img>

            </div>
           
        </div>
        </>   
      )  
  }
  
  
  export default FooterContacto;
  