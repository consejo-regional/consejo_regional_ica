import React from 'react'
import {useEffect,useState} from "react"

const ConsejosDistritales = ()=> {


    const[informacion,setInformacion]=useState([])
    useEffect(()=>{
        fetch("https://api.cmpica.org.pe/api/consejo_distrital/read.php")
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])
  
      return(
        <>
        <div className="contenedor_colegio">
            <div className="container-imagen-banner">
                <div className="logo-banner">
                    <div className="logo-banner-svg"></div>
                </div>
                <div className="titulo-contenido-banner">
                    <div className="titulo-contenido-banner-izquierda">CONSEJOS</div>
                    <div className="titulo-contenido-banner-derecha">DISTRITALES</div>
                </div>

            </div>
            <div className="container-descripccion-colegio">
                <div className="grid-documentos">

                    {
                    informacion.map(c=>(
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