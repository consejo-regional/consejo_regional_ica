import React from 'react'
import mapa from '../../assets/imagenes/mapa.png'
import Mapa from './mapa';

import { GoogleMap, LoadScript, Marker  } from '@react-google-maps/api';



const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -14.0740718,
    lng: -75.732524
  };
  
  
const LIBRARIES = ["places"];

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

                <LoadScript
                        googleMapsApiKey="AIzaSyCV89KUJoSBf7KoQOX8-qXAfHn_KXnlb2w"
                        libraries={LIBRARIES}
                    >
                        <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={17}
                        >
                        { /* Child components, such as markers, info windows, etc. */ }
                        <>
                        <Marker position={center}  />
                        </>
                        
                        </GoogleMap>
                </LoadScript>
                <img src={mapa} alt="" className="imgFooter"></img>

            </div>
           
        </div>
        </>   
      )  
  }
  
  
  export default FooterContacto;
  