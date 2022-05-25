import React from 'react'


const Biblioteca = ()=> {

    
    return(
        <>
        
      <div className="biblioteca"></div>
      <div className="contenedor-evento-titulo">
                  <h4>Consejo Regional IX – ICA </h4>
                  <h1>BIBLIOTECA</h1>
        </div>
      
        <div className="contenedor_biblioteca_grid">
            <Libro></Libro>
            <Libro></Libro>
            <Libro></Libro>
            <Libro></Libro>

        </div>
         
    </>   
      )  

     }

     const Libro = ()=> {
  
          return(
            <>
            <div className="libros_cart">
            <h3 className="titulos-libro">TITULO:</h3>
            <img alt="" src={process.env.PUBLIC_URL + `/libros/libro.png`} className="libros-biblioteca"></img>
            
            <h5 className="autor-libro">AUTOR:</h5>
            <h5>FECHA:</h5>
            <div className="botonDescarga">DESCARGA</div>

            </div>

         
            </>   
          )       
  }


  
  export default Biblioteca;
  