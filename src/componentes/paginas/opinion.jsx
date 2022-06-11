import React from 'react'




const Pronunciamiento = ()=> {
      return(
        <>
        <div className="contenedor_promunciamiento">
            <div className="contenedor_promunciamiento-grid">
                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/CONDOLENCIAS (2) (1) 1.png`}></img>
                </div>
                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/FALLECIMIENTO DR ALBUQUERQUE FRANCO 1.png`}></img>
                </div>
            </div>

           
        </div>
        </>   
      )  
  }
  
  
  export default Pronunciamiento;
  