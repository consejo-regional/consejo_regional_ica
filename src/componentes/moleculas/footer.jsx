import React from 'react'



const Footer = ()=> {
      return(
        <>
        <div className="contenedor_footer">


            <div className="item_contenedor_footer">
                <img src={process.env.PUBLIC_URL + `iconos/doctor.png`}/>

                <div className="item_contenedor_footer_bloque">
                    <h1 className="item_contenedor_texto">DIRECTOR</h1>
                    <h1 className="item_contenedor_texto_color">Dr.muñante</h1>
                    <h1 className='item_contenedor_texto'>correo@gmail.com</h1>
                </div>
            </div>

            <div className="item_contenedor_footer">
                <img src={process.env.PUBLIC_URL + `iconos/cuaderno-de-contactos.png`}/>
                <div className="item_contenedor_footer_bloque">
                    <h1 className="item_contenedor_texto">INFORMES</h1>
                    <h1 className="item_contenedor_texto_color">Dr.muñante</h1>
                    <h1 className='item_contenedor_texto'>correo@gmail.com</h1>
                </div>
                <div className="item_contenedor_footer_bloque">
                    <h1 className="item_contenedor_texto">INFORMES</h1>
                    <h1 className="item_contenedor_texto_color">Dr.muñante</h1>
                    <h1 className='item_contenedor_texto'>correo@gmail.com</h1>
                </div>
            </div>

            <div className="item_contenedor_footer">
                <img src={process.env.PUBLIC_URL + `iconos/letra.png`}/>
                <div className="item_contenedor_footer_bloque">

                    <h1 className="item_contenedor_texto">DIRECTOR</h1>
                    <h1 className="item_contenedor_texto_color">Dr.muñante</h1>
                    <h1 className='item_contenedor_texto'>correo@gmail.com</h1>
                </div>
            </div>

            <div className="item_contenedor_footer">
                <img src={process.env.PUBLIC_URL + `iconos/tarjeta.png`}/>
                <div className="item_contenedor_footer_bloque">

                    <h1 className="item_contenedor_texto">COBRANZAS</h1>
                    <h1 className="item_contenedor_texto_color">Dr.muñante</h1>
                    <h1 className='item_contenedor_texto'>correo@gmail.com</h1>
                </div>
            </div>
        
           
        </div>
        <div className='item_contenedor_footer_final'>
                   <img className='logo_footer' src={process.env.PUBLIC_URL + `iconos/logo.png`}/>


           </div> 

        </>   
      )  
  }
  
  
  export default Footer;
  