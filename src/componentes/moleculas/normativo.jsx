import React from 'react'





const Normativo = ()=> {
      return(
        <>
        <div className="contenedor-table">

        <table >
       <caption>DOCUMENTOS NORMATIVOS</caption>
       <thead>
           <tr class="tr-head">
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
               <a className='contenedor-table' href={process.env.PUBLIC_URL+"documentos/resolucion de donacion.pdf"} >
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
  