import React ,{useRef}  from 'react'
import { useEffect,useState } from "react";
import { ProgressBar } from  'react-loader-spinner'
import { Wave } from "react-animated-text";

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }
const Condolencias = ()=> {

    const [mostrarHTML, setMostrarHTML] = React.useState(false);
    const [parametro, setParametro] = React.useState('');

    const botonEsconderFlotanteCondolencias=useRef()

    const clickFlotanteEsconder=()=>{
        const BotonEsconder_1=botonEsconderFlotanteCondolencias.current
        BotonEsconder_1.classList.add('esconder_1')
        setMostrarHTML(false);
    }

    const clickFlotante = (param) => {
        setParametro(param);
        setMostrarHTML(true);
      };


    const[informacion,setInformacion]=useState()
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_URL_API}condolencias/read.php`)
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])
      return(
        <>
        <ScrollToTopOnMount />

        <div className="container-imagen-banner">
                <div className="conteiner-imagen-banner-blur">
                    <div className="logo-banner">
                        <div className="logo-banner-svg"></div>
                    </div>
                    <div className="titulo-contenido-banner">
                        <div className="titulo-contenido-banner-izquierda"></div>
                        <div className="titulo-contenido-banner-derecha">CONDOLENCIAS</div>
                    </div>

                </div>

            </div>

         <div className="contenedor_condolencia">
            <div className="contenedor_condolencia-grid">
            {
                    informacion
                    ?
                    informacion.map(c=>(
                        <div className="contenedor_condolencia_cart">
                            <img alt="" src={process.env.PUBLIC_URL + "/" + c.ruta } onClick={() => clickFlotante(c.ruta)} ></img>
                        </div>
                      ))
                    :
                    <div  className="contenedor_loader_central_contenido">
                        <Wave text="CARGANDO CONTENIDO ..." effect="fadeOut" effectChange={2.0} /> 
                        <ProgressBar
                            height="80"
                            width="80"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass="progress-bar-wrapper"
                            borderColor = '#D4D4D4'
                            barColor = '#B7B7B7'
                        />
                    </div>
                  }  
            </div>
        </div>
        {mostrarHTML && (
        <div className="Flotante_contenedor" ref={botonEsconderFlotanteCondolencias}>
            <div className="Flotante_tarjeta">
                <div className="anuncios_banner_boton_1" onClick={clickFlotanteEsconder} ></div> 
                <img className={`Flotante_imagen`} alt="" src={process.env.PUBLIC_URL + "/" + parametro }  ></img>
            </div>
        </div>
        )}
        </>   
      )  
  }
  
  
  export default Condolencias;
  