import React,{useRef} from 'react'
import {useEffect,useState} from "react"
import { Triangle } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



const Anuncios = ()=> {

    const botonEsconder=useRef()

    const[informacion,setInformacion]=useState([{imagen:'',orientacion:''}])
    useEffect(()=>{
        fetch( `${process.env.REACT_APP_URL_API}pronunciamiento_inicio/read.php`)
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
                        <img alt='' className={(informacion[0].orientacion==='vertical')?'anuncios_banner_vertical':'anuncios_banner_horizontal'} src={process.env.PUBLIC_URL+`/`+ informacion[0].imagen}></img>
               
                    )
                }
               

                
           
            </div> 
           
        </div>
        </>   
      )  
  }
  
  
  export default Anuncios;
  