import React from 'react'



const Footer = ()=> {
      return(
        <>
        <div className="contenedor_footer">
            
            <div className="item_contenedor_footer">
                <img src={process.env.PUBLIC_URL + `iconos/doctor.png`}/>
                <div className="item_contenedor_footer_bloque">
                    <h1 className="item_contenedor_texto">DECANO</h1>
                    <h1 className="item_contenedor_texto_color">Dr. Luis Felipe Muñante Aparcana.</h1>
                    <h1 className='item_contenedor_texto'>Consejo.regional.ica@cmp.org.pe</h1>
                </div>
            </div>

            <div className="item_contenedor_footer">
                <img src={process.env.PUBLIC_URL + `iconos/cuaderno-de-contactos.png`}/>
                <div className="item_contenedor_footer_bloque">
                    <h1 className="item_contenedor_texto">SECRETARIA</h1>
                    <h1 className="item_contenedor_texto_color">Jesus Huamani Conislla.</h1>
                    <h1 className='item_contenedor_texto'>crix_secretaria@colegiomedico.org.pe</h1>
                </div>
                <div className="item_contenedor_footer_bloque">
                    <h1 className="item_contenedor_texto">ADMINISTRACION</h1>
                    <h1 className="item_contenedor_texto_color">Maria Conislla Trucios.</h1>
                    <h1 className='item_contenedor_texto'>Cel: 955047743</h1>
                </div>
            </div>

            <div className="item_contenedor_footer">
                <img src={process.env.PUBLIC_URL + `iconos/letra.png`}/>
                <div className="item_contenedor_footer_bloque">

                    <h1 className="item_contenedor_texto">SISTEMAS</h1>
                    <h1 className="item_contenedor_texto_color">Fernando Cordova Ramos.</h1>
                    <h1 className='item_contenedor_texto'>crix_sistemas@colegiomedico.org.pe</h1>
                </div>
            </div>

            <div className="item_contenedor_footer">
                <img src={process.env.PUBLIC_URL + `iconos/tarjeta.png`}/>
                <div className="item_contenedor_footer_bloque">

                    <h1 className="item_contenedor_texto">COBRANZAS</h1>
                    <h1 className="item_contenedor_texto_color">Liliana Espinoza Lizetti.</h1>
                    <h1 className='item_contenedor_texto'>crix_caja@colegiomedico.org.pe</h1>
                </div>
                <div className="item_contenedor_footer_bloque">
                    <h1 className="item_contenedor_texto">CONTABILIDAD</h1>
                    <h1 className="item_contenedor_texto_color">Guadalupe Gallegos de Garcia.</h1>
                    <h1 className='item_contenedor_texto'>crix_contabilidad@colegiomedico.org.pe</h1>
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
  