import React from 'react'




const Pronunciamiento = ()=> {
      return(
        <>
        <div className="contenedor_promunciamiento">
            <div className="contenedor_promunciamiento-grid">
                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/COMUNICADO 1.jpeg`}></img>
                </div>
                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/PRONUNCIAMIENTO 6.jpeg`}></img>
                </div>

                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/PRONUNCIAMIENTO 5.jpeg`}></img>
                </div>

                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/PRONUNCIAMIENTO 4.jpeg`}></img>
                </div>

                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/PRONUNCIAMIENTO 3.jpeg`}></img>
                </div>

                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/PRONUNCIAMIENTO 2.jpeg`}></img>
                </div>

                <div className="contenedor_promunciamiento_cart">
                    <img src={process.env.PUBLIC_URL + `/opinion/PRONUNCIAMIENTO 1.jpeg`}></img>
                </div>

            </div>

           
        </div>
        </>   
      )  
  }
  
  
  export default Pronunciamiento;
  