import React from 'react'


const Normativo = ()=> {
      return(
        <>
         <div className="container-imagen-banner">
                <div className="conteiner-imagen-banner-blur">
                    <div className="logo-banner">
                        <div className="logo-banner-svg"></div>
                    </div>
                    <div className="titulo-contenido-banner">
                        <div className="titulo-contenido-banner-izquierda"></div>
                        <div className="titulo-contenido-banner-derecha">NORMATIVO</div>
                    </div>
                </div>
        </div>


        <div className="contenedor-table">
            <caption>DOCUMENTOS NORMATIVOS</caption>
            <table>
                <thead>
                    <tr>
                        <th class="th-head">NOMBRE</th>
                        <th class="th-head">FECHA</th>
                        <th class="th-head">DESCARGAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="letras">RESOLUCION DE DONACION</td>
                        <td>25/06/2022</td>
                        <td>
                            <a className='contenedor-descarga' href={process.env.PUBLIC_URL+"documentos/resolucion de donacion.pdf"} >
                                <div className="imagen-grid-contenidos-contenidos"></div>
                            </a>
                        </td>
                        
                    </tr>
                    <tr>
                        <td className="letras">RESOLUCION DE DONACION</td>
                        <td>25/06/2022</td>
                        <td>
                             <a className='contenedor-descarga' href={process.env.PUBLIC_URL+"documentos/resolucion de donacion.pdf"} >
                                <div className="imagen-grid-contenidos-contenidos"></div>
                            </a>
                        </td>
                        
                    </tr>

                    <tr>
                        <td className="letras">RESOLUCION DE DONACION</td>
                        <td>25/06/2022</td>
                        <td>
                                <a  href={process.env.PUBLIC_URL+"documentos/resolucion de donacion.pdf"} >
                                <div className="imagen-grid-contenidos-contenidos"></div>
                            </a>
                        </td>
                        
                    </tr>
            
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
        </>   
      )  
  }

  
  export default Normativo;
  