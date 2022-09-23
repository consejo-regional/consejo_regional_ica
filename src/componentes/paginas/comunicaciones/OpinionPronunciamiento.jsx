import React from 'react'
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

    const[informacion,setInformacion]=useState()
    useEffect(()=>{
        fetch("https://api.cmpica.org.pe/api/opinion_y_pronunciamiento/read.php")
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])
      return(
        <>
       <ScrollToTopOnMount />
        <div className="contenedor_promunciamiento">
            <div className="contenedor_promunciamiento-grid">
                {
                    informacion
                    ?
                    informacion.map(c=>(
                        <div className="contenedor_promunciamiento_cart">
                            <img alt="" src={process.env.PUBLIC_URL + "/" + c.ruta}></img>
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
        </>   
      )  
  }
  
  
  export default Condolencias;
  