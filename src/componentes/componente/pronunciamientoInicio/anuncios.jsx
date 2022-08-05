import React,{useRef} from 'react'


const Anuncios = ()=> {

    const botonEsconder=useRef()

    const clickAnuncio=()=>{
        
        const BotonEsconder=botonEsconder.current
        BotonEsconder.classList.add('esconder')
       // console.log(boton.current)


    }
      return(
        <>
        <div className="contenedor_anuncios" ref={botonEsconder}>
             <div className="anuncios_conteiner">
                <div className="anuncios_banner_boton"  onClick={clickAnuncio}  ></div> 
                <img alt='' className='anuncios_banner' src={process.env.PUBLIC_URL+`/pronunciamiento/COMUNICADO 8.png`}></img>
            </div> 
        </div>
        </>   
      )  
  }
  
  
  export default Anuncios;
  