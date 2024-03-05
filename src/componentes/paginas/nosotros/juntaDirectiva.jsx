import React from 'react'
import {useEffect,useState} from "react"

const JuntaDirectiva = ()=> {


    const[informacion,setInformacion]=useState([])
    useEffect(()=>{
        fetch( `${process.env.REACT_APP_URL_API}junta_directiva/read.php`)
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])



    // console.log( typeof(c.decano.nombre))
      return(
        
        <>
        <div className="datos_directiva">
          <h4>JUNTA DIRECTIVA</h4>
          <div className="conteiner-datos">
              <h4></h4>
              <p className="contenido_cart_descripccion">La gestión para el periodo 2022-2024 está liderada por el Dr. Luis Felipe Muñante Aparcana, Decano del Consejo Regional de Ica del Colegio Médico del Peru y su Junta Directiva está conformada por un grupo de médicos profesionales de gran trayectoria entre académicos y gremiales.</p> 
              <div className="contenido-izquierda">
                
              </div>
          </div>

          {
                informacion.map(c=>(
                  <>
                  <div className="contenedor_junta_grid">
                                  <ItemAutoridad imagen={process.env.PUBLIC_URL + c.decano.foto} nombre={c.decano.nombre} description="Decano"></ItemAutoridad>

                                  
                            </div>
                            <div className="contenedor_junta1_grid">
                                  <ItemAutoridad imagen={process.env.PUBLIC_URL +c.tesorero.foto} nombre={c.tesorero.nombre} description="Tesorero"></ItemAutoridad>
                                  <ItemAutoridad imagen={process.env.PUBLIC_URL + c.secretario.foto} nombre={c.secretario.nombre} description="Secretario"></ItemAutoridad>
                                  
                            </div>
                            <div className="contenedor_junta1_grid">
                                  <ItemAutoridad imagen={process.env.PUBLIC_URL + c.vocal_01.foto} nombre={c.vocal_01.nombre} description="Vocal I"></ItemAutoridad>
                                  <ItemAutoridad imagen={process.env.PUBLIC_URL + c.vocal_02.foto} nombre={c.vocal_02.nombre} description="Vocal II"></ItemAutoridad>
                                  
                            </div>
                            <div className="contenedor_junta1_grid">
                                  <ItemAutoridad imagen={process.env.PUBLIC_URL + c.accesitario_01.foto} nombre={c.accesitario_01.nombre} description="Accesitario I"></ItemAutoridad>
                                  <ItemAutoridad imagen={process.env.PUBLIC_URL + c.accesitario_02.foto} nombre={c.accesitario_02.nombre}description="Accesitario II"></ItemAutoridad>
                          
                            </div>
                  </>

                  
                ))
                
                
          }

          
        </div>
        
        </>   
      )  
  }


  const ItemAutoridad = ({imagen,nombre,description})=> {
    return(
      <>
      <div className="contenedor_servicios_item">
        <img className="servicios imagen" src={imagen} alt={imagen}></img>
        <div className="servicios-nombre">{nombre}</div>
        <div className="servicios-description">{description}</div>
      </div>
      </>   
    )  
}



  
  
  export default JuntaDirectiva;
  