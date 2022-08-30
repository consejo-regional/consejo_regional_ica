import React  from 'react'

import {useParams} from 'react-router-dom'
// import Informacion from  "../../../data/noticia"


import { useEffect,useState } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}



// const informacion=Informacion

  
  
  const ComunicacionesDetalle = ()=> {


    const[informacion,setInformacion]=useState([])

    useEffect(()=>{
        fetch("https://api.cmpica.org.pe/api/noticias/read.php")
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])


    const {id}=useParams()


  
        return(
          <>

            <ScrollToTopOnMount />

            {
            informacion.map(c=>(     
                id===c.id ? <NoticiasDetalle  key={c.id} imagen={c.imagenDetalles}  tipo={c.tipo} titulo={c.titulo} contenido={c.contenido} fecha={c.fecha} ></NoticiasDetalle>:null
            )) 
            }  
          </>   
        )  
    }
 


    const NoticiasDetalle = ({imagen,titulo, tipo,contenido,fecha})=> {
  
  
        if(tipo==="NOTICIA"){
          return(
            <>
            <div className="detalle-grid"  >
                <h2 id="the-hash" name="the-hash">NOTICIAS.</h2>
                <div className="detalle-grid-contenido" >
                <div className="detalle-cart-contenido">
                    <div className="detalle-cart-contenido-titulo">{titulo}</div>
                    <div className="detalle-cart-contenido-fecha">{fecha}</div>
                    <div className="">{contenido}</div>
                  
                  </div>
                  <div className="detalle-grid-contenido-imagenes">
                    {
                      imagen.split(';').map(c=>(
                            <img className="detalle-grid-contenido-imagem" src={process.env.PUBLIC_URL+`/`+c} alt={c}></img> 

                      ))
                    }

                  </div>
                 
                </div>
            </div>
            
            </>   
          )  
  
  
        }
         
  }
  
   
    
    export default ComunicacionesDetalle;
    
  