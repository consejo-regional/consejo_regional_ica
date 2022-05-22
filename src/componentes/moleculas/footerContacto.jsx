import React from 'react'
import mapa from '../../assets/imagenes/mapa.png'
import Mapa from './mapa';


const FooterContacto = ()=> {
      return(
        <>
        <div className="contenedor_footer_contacto">

            <div className="contenedor-evento-titulo">
                <h4>Consejo Regional IX – ICA </h4>
                <h1>CONTACTENOS</h1>
            </div>

            <div className="footerContacto">
                <div className="footerContactoDescripccion">
                    <h4>El Colegio Médico del Perú (CMP) es una institución autónoma de derecho público interno, representativa de la profesión médica en todo el territorio de la República. Consejo Regional IX – ICA  es el órgano directivo del CMP en Lima Metropolitana y representa a más del 50% de los médicos colegiados del Perú.</h4>
                    <h4>Contáctenos</h4>
                    <h4>los, Ca. Nardos 158, Ica</h4>
                    <h4>consejo.regional@cmpica.org.pe</h4>
                </div>

                <Mapa
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCV89KUJoSBf7KoQOX8-qXAfHn_KXnlb2w"
                conteinerElement={<div style={{height:'400px'}}/>}
                mapElement={<div style={{height:'100%'}}/>}
                loadingElement={<p>hola mundo</p>}
                />
                {/* <img src={mapa} alt="" className="imgFooter"></img> */}

            </div>
           
        </div>
        </>   
      )  
  }
  
  
  export default FooterContacto;
  