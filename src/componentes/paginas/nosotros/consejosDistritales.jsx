import React from 'react'
import {useEffect,useState} from "react"

const ConsejosDistritales = ()=> {


    const[informacion,setInformacion]=useState([])
    useEffect(()=>{
        fetch("http://localhost/php_rest_myblog/api/consejo_distrital/read.php")
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])
  
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