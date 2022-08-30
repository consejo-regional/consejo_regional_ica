import React from 'react'
import {useEffect,useState} from "react"
// import utf8 from "utf8";

const Comite = ()=> {

    const[informacion,setInformacion]=useState([])
    useEffect(()=>{
        fetch("https://api.cmpica.org.pe/api/comites/read.php")
        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])

    

    var contenido = {
        titulo: 'COMITÉS',
        descripccion: ''
    }
      return(
        
        <>
         <div className="">
            <div className="container-imagen-banner">
                <div className="logo-banner">
                    <div className="logo-banner-svg"></div>
                </div>
                <div className="titulo-contenido-banner">
                    <div className="titulo-contenido-banner-izquierda">DIVERSOS</div>
                    <div className="titulo-contenido-banner-derecha">COMITES</div>
                </div>
            </div>
        </div>


        <div className="datos">
        <h2>{  contenido.titulo }</h2>
        <div className="conteiner-datos">
            <h4 className="contenido_cart_descripccion">{contenido.descripccion}</h4> 
            <h2>COMITÉ DE VIGILANCIA ÉTICA Y DEONTOLÓGICA </h2>
            <h4 className="contenido_cart_descripccion">El Comité de Vigilancia Ética y Deontológica (CVED) del Consejo Regional IX -ICa, tiene como función difundir y vigilar el cumplimiento de las disposiciones de Ley, Estatuto, Reglamento, Código de Ética y Deontología, y/o cualquier acuerdo que emane del Consejo Nacional o CRIX-Ica. (Art. 72.1° del Reglamento del Colegio Médico del Perú).

            El Art. 72.° del Reglamento del CMP, describe las actividades a cargo del CVED.
            El Código de Ética y Deontología del Colegio Médico del Perú, establece los deberes, derechos y valores que debe tomar en consideración cada médico al momento de ejercer sus funciones en los servicios de atención de salud, administración y gestión de los mismos. Este conjunto de principios y reglas también establece parámetros para la educación de los futuros médicos, la investigación científica, el manejo documentario y las relaciones institucionales.

            El Código de Ética y Deontología del Colegio Médico del Perú, establece los deberes, derechos y valores que debe tomar en consideración cada médico al momento de ejercer sus funciones en los servicios de atención de salud, administración y gestión de los mismos. Este conjunto de principios y reglas también establece parámetros para la educación de los futuros médicos, la investigación científica, el manejo documentario y las relaciones institucionales.
            </h4> 
            <h2>FUNCIONES DEL CVED </h2>
            <h4 className="contenido_cart_descripccion">Art. 72.º del Reglamento del CMP. DEL COMITÉ DE VIGILANCIA ÉTICA Y DEONTOLÓGICA</h4> 
            <h4 className="contenido_cart_descripccion">Corresponde al Comité de Vigilancia Ética y Deontológica:</h4> 
            <h4 className="contenido_cart_descripccion">72.1. Difundir y vigilar el cumplimiento de las disposiciones de la Ley, Estatuto, Reglamento, Código de Ética y Deontología, su reglamento y cualquier norma o acuerdo emanado del Consejo Nacional o Consejos Regionales en su caso.</h4> 
            <h4 className="contenido_cart_descripccion">72.2. Solicitar previo acuerdo al Consejo Regional, abrir procedimiento ético disciplinario a cualquier miembro de la orden por la violación o incumplimiento del Estatuto, Reglamentos, Código de Ética y Deontología, o cualquier norma o acuerdo emanado del Consejo Nacional o Consejo Regional en su caso</h4> 
            <h4 className="contenido_cart_descripccion">72.3. Denunciar, previo acuerdo, ante el Consejo Nacional a cualquiera de los miembros de dicho organismo colegiado por la violación o incumplimiento del Estatuto, Reglamentos, Código de Ética y Deontología o cualquier norma o acuerdo emanado del Consejo Nacional o Consejo Regional en su caso.</h4> 
            <h4 className="contenido_cart_descripccion">72.4. Solicitar previo acuerdo, ante el Consejo Nacional, abrir procedimiento ético disciplinario a los miembros de los Consejos Regionales que corporativamente hayan violado o incumplido del Estatuto, Reglamentos, Código de Ética y Deontología o cualquier norma o acuerdo emanado del Consejo Nacional o Consejo Regional en su caso.</h4> 
            <h4 className="contenido_cart_descripccion">72.5. Defender el prestigio profesional, cuando la profesión o los médicos, individual o colectivamente, sean objeto de agravio</h4> 
            <h4 className="contenido_cart_descripccion">72.6. Denunciar ante el Consejo Nacional cuando en las actividades de las instituciones médicas, científicas, asistenciales u otras relacionadas con la medicina, se incurra en transgresiones a las normas éticas y deontológicas.</h4> 
            <h4 className="contenido_cart_descripccion">72.7. Vigilar, en coordinación con los Consejos Regionales que el aviso profesional no se aparte de las normas que el Colegio establezca al respecto</h4> 
            <h4 className="contenido_cart_descripccion">72.8. Absolver las consultas sobre asuntos de ética y deontología profesional que en vía de apelación, sean puestas en su conocimiento por el Consejo Nacional o los Consejos Regionales soliciten en su caso, vía su propio Comité de Vigilancia Ética y Deontológica.</h4> 
            <h4 className="contenido_cart_descripccion">72.9. Coordinar con los Consejos Regionales la difusión y conocimiento del Código de Ética, así como de los principios bioéticos y deontológicos.</h4> 
            <h4 className="contenido_cart_descripccion">72.10. Cumplir con los encargos del Comité Ejecutivo y del Consejo Nacional.</h4> 
            
            <div className="contenido-izquierda">


             
            </div>

            {
                informacion.map(c=>(
                    <div className="datos">
                    <div className="contenedor-evento-titulo">   
                        <h2 >{ c.titulo }</h2>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="contenedor_comite_grid">
                    
                        {c.presidente? 
                        <ComiteItem imagen={c.presidente.foto} nombre={c.presidente.nombre} description="PRESIDENTE"></ComiteItem>
                       :null
                       }
                       {c.mienbro1? 
                        <ComiteItem imagen={c.mienbro1.foto} nombre={c.mienbro1.nombre} description="MIEMBRO"></ComiteItem>
                       :null
                       }
                       {c.mienbro2? 
                        <ComiteItem imagen={c.mienbro2.foto} nombre={c.mienbro2.nombre} description="MIEMBRO"></ComiteItem>
                       :null
                       }
                       {c.miembro3? 
                        <ComiteItem imagen={c.miembro3.foto} nombre={c.miembro3.nombre} description="MIEMBRO"></ComiteItem>
                       :null
                       }
                       {c.miembro4? 
                        <ComiteItem imagen={c.miembro4.foto} nombre={c.miembro4.nombre} description="MIEMBRO"></ComiteItem>
                       :null
                       }
                       {c.miembro5? 
                        <ComiteItem imagen={c.miembro5.foto} nombre={c.miembro5.nombre} description="MIEMBRO"></ComiteItem>
                       :null
                       }
                       {c.miembro6? 
                        <ComiteItem imagen={c.miembro6.foto} nombre={c.miembro6.nombre} description="MIEMBRO"></ComiteItem>
                       :null
                       }
                       {c.miembro7? 
                        <ComiteItem imagen={c.miembro7.foto} nombre={c.miembro7.nombre} description="MIEMBRO"></ComiteItem>
                       :null
                       }
                       {c.miembro8? 
                        <ComiteItem imagen={c.miembro8.foto} nombre={c.miembro8.nombre} description="MIEMBRO"></ComiteItem>
                       :null
                       }
                       {c.miembro9? 
                        <ComiteItem imagen={c.miembro9.foto} nombre={c.miembro9.nombre} description="MIEMBRO"></ComiteItem>
                       :null
                       }
                       {c.miembro10? 
                        <ComiteItem imagen={c.miembro10.foto} nombre={c.miembro10.nombre} description="MIEMBRO"></ComiteItem>
                       :null
                       }
                       {c.miembro11? 
                        <ComiteItem imagen={c.miembro11.foto} nombre={c.miembro11.nombre} description="MIEMBRO"></ComiteItem>
                       :null
                       }
                       {c.miembro12? 
                        <ComiteItem imagen={c.miembro12.foto} nombre={c.miembro12.nombre} description="MIEMBRO"></ComiteItem>
                       :null
                       }
                       {c.miembro13? 
                        <ComiteItem imagen={c.miembro13.foto} nombre={c.miembro13.nombre} description="MIEMBRO"></ComiteItem>
                       :null
                       }
                       {c.miembro14? 
                        <ComiteItem imagen={c.miembro14.foto} nombre={c.miembro14.nombre} description="MIEMBRO"></ComiteItem>
                       :null
                       }
                    </div>
                </div>

                ))
            }

        </div>
        </div>
        
        </>   
      )  
  }

  const ComiteItem = ({imagen,nombre,description})=> {
    return(
      <>
      <div className="contenedor_comite_item">
        <img className="comite imagen" src={process.env.PUBLIC_URL+`/`+  imagen} alt={nombre}></img>
        <div className="">{nombre}</div>
        <div className="">{description}</div>
      </div>
      </>   
    )  
}




  
  
  export default Comite;