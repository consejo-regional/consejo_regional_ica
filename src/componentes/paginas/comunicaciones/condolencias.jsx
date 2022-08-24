import React from 'react'




const Condolencias = ()=> {
      return(
        <>
         <div className="contenedor_condolencia">
            <div className="contenedor_condolencia-grid">
                <div className="contenedor_condolencia_cart">
                    <img src={process.env.PUBLIC_URL + `/condolencias/CONDOLENCIAS (2) (1) 1.png`}></img>
                </div>
                <div className="contenedor_condolencia_cart">
                    <img src={process.env.PUBLIC_URL + `/condolencias/FALLECIMIENTO DR ALBUQUERQUE FRANCO 1.png`}></img>
                </div>

                <div className="contenedor_condolencia_cart">
                    <img src={process.env.PUBLIC_URL + `/condolencias/CONDOLENCIA DR. BULEJE.jpg`}></img>
                </div>

            </div>

           
        </div>
        </>   
      )  
  }
  
  
  export default Condolencias;
  