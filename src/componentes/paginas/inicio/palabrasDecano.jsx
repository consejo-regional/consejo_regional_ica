import React from 'react'
import ReactPlayer from "react-player"

import {useEffect,useState} from "react"

const PalabrasDecano = ()=> {

    const[informacion,setInformacion]=useState([{url:'',descripccion:''}])
    useEffect(()=>{
        fetch( `${process.env.REACT_APP_URL_API}palabras_decano/read.php`)
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])




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
                            url={informacion[0].url}
                            width='auto'
                            height='50vh'
                            controls={true}
                        />
                        <div className="container-palabras-decano-blur">
                            <img src={process.env.PUBLIC_URL +'/imagenes/pngegg.png'} style={{width: 'auto', height: '5rem'}}></img>
                            <p  className="container-palabras-decano-blur">
                                {informacion[0].descripccion}
                           
                            </p>
                        </div>
                </div>
            </div>

       

        </>   
      )  
  }
  
  
  export default PalabrasDecano;
  