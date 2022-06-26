import React from 'react'





const CmpDiguital = ()=> {
      return(
        <>
        <div className="cmpDiguital">
            <div className="contenedor-cmpDiguital">
                <img alt='' className="imagenCmpDiguital" src={process.env.PUBLIC_URL + `/iconos/Botones-servicios_CMP-Digital1.png`}></img>

            </div>
            <a rel="noreferrer" className="contenedor-despliegue" href="https://www.zona.cmp.org.pe/" target="_blank">
                <div>ACCEDER</div>
                <img alt="" className="imagenCmpDiguitalAcceder" src={process.env.PUBLIC_URL + `/iconos/acceder1.png`}></img>
            </a>
        </div>
        
        </>   
      )  
  }

  
  export default CmpDiguital;
  