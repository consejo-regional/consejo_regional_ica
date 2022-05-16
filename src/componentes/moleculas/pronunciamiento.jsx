import React from 'react'
import imagen1 from '../../assets/pronunciamiento/CONDOLENCIAS (2) (1) 1.png'
import imagen2 from '../../assets/pronunciamiento/FALLECIMIENTO DR ALBUQUERQUE FRANCO 1.png'



const Pronunciamiento = ()=> {
      return(
        <>
        <div className="contenedor_promunciamiento">
            <div className="contenedor_promunciamiento-grid">
                <div className="contenedor_promunciamiento_cart">
                    <img src={imagen1}></img>
                </div>
                <div className="contenedor_promunciamiento_cart">
                    <img src={imagen2}></img>
                </div>
            </div>

           
        </div>
        </>   
      )  
  }
  
  
  export default Pronunciamiento;
  