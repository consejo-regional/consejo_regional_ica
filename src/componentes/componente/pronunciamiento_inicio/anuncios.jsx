import React,{useRef} from 'react'
import AnunciosInicio from '../../../data/anunciosInicio'

const Anuncios = ()=> {

    const botonEsconder=useRef()

    const clickAnuncio=()=>{
        
        const BotonEsconder=botonEsconder.current
        BotonEsconder.classList.add('esconder')


    }
      return(
        <>
        <div className="contenedor_anuncios" ref={botonEsconder}>
             <div className="anuncios_conteiner">
                <div className="anuncios_banner_boton"  onClick={clickAnuncio}  ></div> 
                <img alt='' className={(AnunciosInicio.orientacion=='vertical')?'anuncios_banner_vertical':'anuncios_banner_horizontal'} src={process.env.PUBLIC_URL+`/pronunciamiento/`+AnunciosInicio.imagen}></img>
            </div> 
        </div>
        </>   
      )  
  }
  
  
  export default Anuncios;
  