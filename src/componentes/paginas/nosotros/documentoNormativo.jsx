import React from 'react'

const DocumentoNormativo = ()=> {
      return(
        <>
        <div className="contenedor_banner">
            <div className="container-imagen-banner">
                <div className="conteiner-imagen-banner-blur">
                    
                    <div className="logo-banner">
                        <div className="logo-banner-svg"></div>
                    </div>
                    <div className="titulo-contenido-banner">
                        <div className="titulo-contenido-banner-izquierda">DOCUMENTO</div>
                        <div className="titulo-contenido-banner-derecha">NORMATIVO</div>
                    </div>
                </div>

            </div>

            <div className="container-descripccion-colegio">
                <h4>Documentos Normativos</h4>
                <p>El Colegio Médico del Perú (CMP) es una institución autónoma de derecho público interno, conformado por organismos democráticamente constituidos y representativo de la profesión médica en todo el territorio de la República. Surgió de esfuerzos organizativos gremiales y profesionales y se institucionalizó el 16 de octubre de 1964, al ser creado mediante Ley Nº 15173; modificada por D.L. 17239 del 29 de noviembre e instalándose su primer Consejo Nacional presidido por el primer Decano Dr. Jorge de la Flor Valle, en noviembre de 1969.</p>
                <p>Siendo la colegiación un requisito indispensable, el CMP incorpora obligatoriamente a todos los médico-cirujanos que se encuentren legalmente aptos para ejercer la profesión.</p>
                <p>El CMP tiene como misión fomentar el bienestar social y el trabajo decente de médicos y médicas, promover una reforma por el derecho a la salud y el acceso universal a la seguridad social, garantizar una formación y ejercicio profesional científica, humanista, basada en los principios ético-deontológicos de la profesión.</p>
            </div>
            
            <div className="container-descripccion-colegio">
                <div className="grid-documentos">
                    <div className="grid-documentos-contenidos">
                        <div>1. Estatuto del Colegio Médico del Perú (CMP)</div>
                        <h5>Descargar</h5>
                        <a href="https://www.cmp.org.pe/wp-content/uploads/2020/01/ESTATUTO-DEL-COLEGIO-MEDICO-DEL-PERU.pdf">
                            <div className="imagen-grid-contenidos-contenidos"></div>
                        </a>
                      
                    </div>
                    <div className="grid-documentos-contenidos">
                        <div>2. Emblema colegio medico</div>
                        <h5>Descargar</h5>
                        <a href="https://www.cmp.org.pe/wp-content/uploads/2020/01/ESTATUTO-DEL-COLEGIO-MEDICO-DEL-PERU.pdf">
                            <div className="imagen-grid-contenidos-contenidos"></div>
                        </a>
                    </div>
                    <div className="grid-documentos-contenidos">
                        <div>3. Himno del Colegio Médico del Perú</div>
                        <h5>Descargar</h5>
                        <a href="https://www.youtube.com/watch?v=7IqKmHifTAM">
                            <div className="imagen-grid-contenidos-contenidos"></div>
                        </a>
                    </div>
                    <div className="grid-documentos-contenidos">
                        <div>4. Reglamento del Colegio Médico del Perú (CMP).</div>
                        <div> Actualizado
                             con la resolución N°071 – CN – CMP – 2020</div>
                        <h5>Descargar</h5>
                        <a href="https://www.cmp.org.pe/wp-content/uploads/2022/05/REGLAMENTO-DEL-COLEGIO-MEDICO-DEL-PERU-03-05-2022.pdf">
                            <div className="imagen-grid-contenidos-contenidos"></div>
                        </a>
                    </div>
                    <div className="grid-documentos-contenidos">
                        <div>5. Resolución 9406 Reglamento Interno de trabajo CMP 2011.</div>
                        <h5>Descargar</h5>
                        <a href="https://www.cmp.org.pe/wp-content/uploads/2020/01/Resolucion-9406-Reglamento-Interno-de-trabajo-CMP-2011.pdf">
                            <div className="imagen-grid-contenidos-contenidos"></div>
                        </a>
                    </div>
                </div>
            </div>


        </div>
        </>   
      )  
  }
  
  
  export default DocumentoNormativo;