import React,{useRef} from 'react'
import AnunciosInicio from '../../../data/anunciosInicio'
import {useEffect,useState} from "react"


const Anuncios = ()=> {

    const botonEsconder=useRef()

    const[informacion,setInformacion]=useState([{imagen:'',orientacion:''}])
    useEffect(()=>{
        fetch("https://api.cmpica.org.pe/api/pronunciamiento_inicio/read.php")
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])

    

    const clickAnuncio=()=>{
        
        const BotonEsconder=botonEsconder.current
        BotonEsconder.classList.add('esconder')


    }
      return(
        <>
        <div className="contenedor_anuncios" ref={botonEsconder}>
             <div className="anuncios_conteiner">
                <div className="anuncios_banner_boton"  onClick={clickAnuncio}  ></div> 
                <img alt='' className={(informacion[0].orientacion=='vertical')?'anuncios_banner_vertical':'anuncios_banner_horizontal'} src={process.env.PUBLIC_URL+`/`+ informacion[0].imagen}></img>
            </div> 
        </div>
        </>   
      )  
  }
  
  
  export default Anuncios;
  