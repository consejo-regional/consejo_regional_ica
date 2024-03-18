import React,{useRef} from 'react'
import {useEffect,useState} from "react"
import { Triangle } from  'react-loader-spinner'



const Anuncios = ()=> {

    const botonEsconder=useRef()
    const segundoComunicado=useRef()

    const[informacion,setInformacion]=useState([{imagen:'',orientacion:''}])
    useEffect(()=>{
        fetch( `${process.env.REACT_APP_URL_API}pronunciamiento_inicio/read.php`)
        .then((res) => res.json())
        .then(
            data=>setInformacion(data)
        );
    },[])

    const clickAnuncio=()=>{

        if (informacion[1]) {
            const BotonEsconder=botonEsconder.current
            const SegundoComunicado=segundoComunicado.current

            BotonEsconder.classList.add('esconder')
            SegundoComunicado.style.display = 'flex'

        }else{
            const BotonEsconder=botonEsconder.current
            BotonEsconder.classList.add('esconder')
        }    
    }

    const clickAnuncio_1=()=>{

        const SegundoComunicado=segundoComunicado.current
        SegundoComunicado.style.display = 'none'
    }

      return(
        <>
        <div className="contenedor_anuncios" ref={botonEsconder}>
             <div className="anuncios_conteiner">
                <div className="anuncios_banner_boton"  onClick={clickAnuncio} ></div> 
                {
                    (informacion[0].imagen==='')?(
                        <div  className="anuncios_banner_vertical" >
                        <Triangle
                        height="80"
                        width="80"
                        color="#808080"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                        />
                    </div>
                    ) :
                    (
                        <a href={(informacion[0].enlace!=="")?informacion[0].enlace:null} target='_blank'>
                            <img alt='' className={(informacion[0].orientacion==='vertical')?'anuncios_banner_vertical':'anuncios_banner_horizontal'} src={process.env.PUBLIC_URL+`/`+ informacion[0].imagen}></img>
                        </a>
               
                    )
                }
            </div> 
           
        </div>
        {
        <div className="contenedor_anuncios_1" ref={segundoComunicado}>
              <div className="anuncios_conteiner">
                 <div className="anuncios_banner_boton" onClick={clickAnuncio_1}></div> 
                 {  
                   (informacion.length>1)
                   ?
                        (informacion[1].imagen==='')
                        ?
                        (
                            <div  className="anuncios_banner_vertical" >
                            <Triangle
                            height="80"
                            width="80"
                            color="#808080"
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                            />
                            </div>
                         ) :
                        (
                            <a href={(informacion[1].enlace!=="")?informacion[1].enlace:null}>
                                <img alt='' className={(informacion[1].orientacion==='vertical')?'anuncios_banner_vertical':'anuncios_banner_horizontal'} src={process.env.PUBLIC_URL+`/`+ informacion[1].imagen}></img>
                            </a>
                        )
                   :
                   null 
                }
             </div> 
         </div>
        }
        </>   
      )  
  }
  
  
  export default Anuncios;
  