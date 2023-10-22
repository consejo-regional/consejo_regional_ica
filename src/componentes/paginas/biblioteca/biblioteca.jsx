import React from 'react'
// import BibliotecaLibros from '../../../data/biblioteca'
import {useEffect,useState} from "react"


// const biblioteca=BibliotecaLibros

const Biblioteca = ()=> {

  const[informacion,setInformacion]=useState([])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_URL_API}biblioteca/read.php`)
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])
    
    return(
        <>
        
      <div className="biblioteca"></div>
      <div className="contenedor-evento-titulo">
                  <h4>Consejo Regional IX – ICA </h4>
                  <h1>BIBLIOTECA</h1>
        </div>
      
        <div className="contenedor_biblioteca_grid">

        {

        informacion.map(c=>(
          <Libro titulo={c.titulo} fecha={c.fecha} autor={c.autor} recurso={c.recurso} enlace={c.enlace}></Libro>
        ))
        }      

        </div>
         
    </>   
      )  

     }

     const Libro = ({titulo,fecha,autor,recurso,enlace}) => {
  
          return(
            <>
            <div className="libros_cart">
            <h3 className="titulos-libro">{titulo}</h3>
            <img alt="" src={process.env.PUBLIC_URL + `/libros/libro.png`} className="libros-biblioteca"></img>
            
            <h5 className="autor-libro">{autor}</h5>
            <h5 className="autor-libro">{recurso}</h5>
            <h5>{fecha}</h5>
            <div className="botonDescarga">{enlace}</div>

            </div>

         
            </>   
          )       
  }


  
  export default Biblioteca;
  