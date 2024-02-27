import React ,{useRef} from 'react'
import {useEffect,useState} from "react"

import {useParams} from 'react-router-dom'
// import EfemeridesInformacion from  "../../../data/efemerides"



// const informacion=EfemeridesInformacion

  
  
  const ConveniosDetalle = ()=> {


    const[informacion,setInformacion]=useState([])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_URL_API}convenios/read.php`)
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])


    const {id}=useParams()
  
        return(
          <>
            {
            informacion.map(c=>(     
                id===(c.id).toString()? <ConvenioItem  key={c.id} imagenes={c.imagenDetalle}  tipo={c.tipo} description={c.description} contenido={c.contenido} fecha={c.fecha} ></ConvenioItem>:null
            )) 
            }  
          </>   
        )  
    }
 


    const ConvenioItem = ({imagenes,description, tipo,contenido,fecha})=> {
  

          const [mostrarHTML, setMostrarHTML] = React.useState(false);
          const [parametro, setParametro] = React.useState('');
          const botonEsconderFlotanteOpinion=useRef()
          const clickFlotanteEsconder=()=>{
              const BotonEsconder_1=botonEsconderFlotanteOpinion.current
              BotonEsconder_1.classList.add('esconder_1')
              setMostrarHTML(false);
          }
          const clickFlotante = (param) => {
              setParametro(param);
              setMostrarHTML(true);
            };
  
        if(tipo==="CONVENIO"){
          return(
            <>
              <div className="detalle-grid">
                  <h2>NUESTROS CONVENIOS</h2>
                  <div className="detalle-grid-contenido" >
                  <div className="detalle-cart-contenido">
                      <div className="detalle-cart-contenido-titulo">{description}</div>
                      <div className="detalle-cart-contenido-fecha">{fecha}</div>
                      <div className="">{contenido}</div>
                    
                    </div>
                    <div className="detalle-grid-contenido-imagenes">
                      {
                          imagenes.split(';').map(c=>(
                              <img className="detalle-grid-contenido-imagem" src={process.env.PUBLIC_URL+`/`+ c} alt={c} onClick={() => clickFlotante(c)}  ></img> 

                        ))
                      }

                    </div>
                  
                  </div>
              </div>
              {mostrarHTML && (
               <div className="Flotante_contenedor" ref={botonEsconderFlotanteOpinion}>
                   <div className="Flotante_tarjeta">
                       <div className="anuncios_banner_boton_1" onClick={clickFlotanteEsconder} ></div> 
                       <img className={`Flotante_imagen`} alt="" src={process.env.PUBLIC_URL + "/" + parametro }  ></img>
                   </div>
               </div>
               )}
            </>   
          )  
  
  
        }
         
  }
  
   
    
    export default ConveniosDetalle;