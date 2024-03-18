import React from 'react'
import {useEffect,useState} from "react"
import { ProgressBar } from  'react-loader-spinner'
import { Wave } from "react-animated-text";


const Footer = ()=> {

    const[informacion,setInformacion]=useState([])
    useEffect(()=>{
        fetch( `${process.env.REACT_APP_URL_API}footer/read.php`)

        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])

      return(
        <>
            <div className="contenedor_footer">    
            {
                  informacion
                  ?
                    informacion.map(c=>(
                        <div className="item_contenedor_footer">
                        <img alt=""  src={process.env.PUBLIC_URL + `iconos/`+c.icono}/>
                        <div className="item_contenedor_footer_bloque">
                            <h1 className="item_contenedor_texto_titulo">{c.cargo}</h1>
                            <h1 className="item_contenedor_texto_color">{c.nombre}.</h1>
                            <h1 className="item_contenedor_texto_color">{c.telefono}.</h1>
                            <h1 className='item_contenedor_texto'>{c.correo}</h1>
                        </div>
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
        </>
      )  
  }

export default Footer;