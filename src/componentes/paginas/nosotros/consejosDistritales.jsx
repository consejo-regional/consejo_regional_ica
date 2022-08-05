import React from 'react'
import ConsejoDistrital from '../../../data/consejoDistrital'

const consejoDistrital=ConsejoDistrital

const ConsejosDistritales = ()=> {
      return(
        <>
        <div className="contenedor_colegio">
            <div className="container-imagen-colegio">
                <div className="logo-colegio">
                    <div className="logo-colegio-svg"></div>
                </div>
                <div className="titulo-contenido-colegio">
                    <div className="titulo-contenido-colegio1">CONSEJOS</div>
                    <div className="titulo-contenido-colegio2">DISTRITALES</div>
                </div>

            </div>
            <div className="container-descripccion-colegio">
                <div className="grid-documentos">

                    {
                      consejoDistrital.map(c=>(
                        <div className="consejoDistritalConteiner">
                        <h3 className="descrip">CONSEJO REGIONAL IX - {c.provincia}</h3>
                        <h5  className="descrip">{c.doctor}</h5>
                        <h5  className="descrip">Teléfonos Cel.:{c.telefono}</h5>
                    </div>
                      ))
                    }


                </div>
            </div>
        </div>
        </>   
      )  
  }
  
  
  export default ConsejosDistritales;