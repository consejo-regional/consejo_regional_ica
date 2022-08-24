import React from 'react'
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}






const Condolencias = ()=> {
      return(
        <>

<ScrollToTopOnMount />

        <div className="contenedor_promunciamiento">
            <div className="contenedor_promunciamiento-grid">
                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/COMUNICADO 1.jpeg`}></img>
                </div>
                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/Pronunciamiento 6.jpeg`}></img>
                </div>

                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/Pronunciamiento 5.jpeg`}></img>
                </div>

                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/Pronunciamiento 4.jpeg`}></img>
                </div>

                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/Pronunciamiento 3.jpeg`}></img>
                </div>

                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/Pronunciamiento 2.jpeg`}></img>
                </div>

                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/Pronunciamiento 1.jpeg`}></img>
                </div>

            </div>

           
        </div>
        </>   
      )  
  }
  
  
  export default Condolencias;
  