import React  from 'react'
import {Link} from 'react-router-dom'
// import Informacion from  "../../../data/noticia"

import { useEffect,useState } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}



// const informacion=Informacion



  const Noticias = ()=> {



    const[informacion,setInformacion]=useState([])
    useEffect(()=>{
        fetch("https://api.cmpica.org.pe/api/noticias/read.php")
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])
  
        return(
          <>
          <ScrollToTopOnMount />

          <div className="contenedor-page"  >
              <div className="contenedor-page-titulo">
                  <h4>Consejo Regional IX – ICA </h4>
                  <h1>NOTICIAS</h1>
           </div>
           <br/>
           <br/>
           <br/>
           <div className="contenedor_separador">
              <hr className="separador"></hr> 
            </div>
              <div className="contenedor_page_grid">
                  {
                    informacion.map(c=>(
                      <NoticiasItem  key={c.id} id={c.id} imagen={c.imagen} titulo={c.titulo} fecha={c.fecha} tipo={c.tipo} ></NoticiasItem>
                      ))
                  }   
              </div>
          </div>
          </>   
        )  
    }
  
    const NoticiasItem = ({id,imagen,titulo,fecha,tipo})=> {
  
        if(tipo==="NOTICIA"){
          return(
            <>
            <div className="contenedor_separador" key={id}>
              <Link className="page-clase"  to={`/noticias/${id}`}   >
                <img className="imagen-page" src={process.env.PUBLIC_URL+`/`+imagen} alt={titulo}></img>
                <div className="page">
                  <div className="colors">{tipo}</div>
                  <div className="page-descripccion">{titulo}</div>
                  <div className="page-descripccion">{fecha}</div>
                  <div className="page-estado">Leer Mas</div>

                </div>
              </Link>
              <hr className="separador"></hr> 
            </div>
            </>   
          )  
  
  
        }
         
  }
    
    export default Noticias;
    
  