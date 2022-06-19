import React  from 'react'




const informacion=[{
    imagen: process.env.PUBLIC_URL + `/imagenes/eventos/EVENTO1.png`,
    description:"Reunion Multisectorial – 09 mayo",
    fecha:"2022/05/09",
    tipo:"NOTICIA",
    contenido:"El Dr. Luis Felipe Muñante Aparcana, Decano del Consejo Regional IX - Ica y el Dr. Orlando Anicama Zapata miembro del Comité de Salud Pública y el Sr. José Ascencio Anicama Alcalde del Distrito de Tate sostuvieron una Reunión Multisectorial para combatir los casos de Dengue. Así mismo el Decano reiteró el apoyo técnico en toda acción que se debe llevar a cabo para cuidar la salud de todo el pueblo de Tate.",
    imagenContenido1:process.env.PUBLIC_URL + `/imagenes/noticias/noticia1.JPG`,
    imagenContenido2:process.env.PUBLIC_URL + `/imagenes/noticias/noticia2.JPG`
  }]
  
  
  
  const ComunicacionesNoticia = ()=> {
  
        return(
          <>
          <div className="contenedor-eventos"  >
              <div className="contenedor-evento-titulo">
       
                  <h1>NOTICIAS</h1>
              </div>

            <div></div>

              <div className="contenedor_eventos_grid">
                  {
  
                    informacion.map(c=>(
                    <SericiosItem  imagen={c.imagenContenido1} description={c.description} fecha={c.fecha} tipo={c.tipo} contenido={c.contenido}></SericiosItem>
                    ))
  
                    
                  }   
              </div>
              
          </div>
          </>   
        )  
    }
  
  
    const SericiosItem = ({imagen,description,fecha,tipo,contenido})=> {
  
  
        if(tipo==="NOTICIA"){
          return(
            <>
           
            <div className="eventos-clase" >
              <div className="colors">{tipo}</div>
              <img className="imagen-evento" src={imagen} alt={imagen}></img>
              <div className="evento-noticia">
                <div className="evento-noticia-descripccion">{description}</div>
                <div className="evento-noticia-descripccion">{fecha}</div>
                {/* <div className="">{contenido}</div> */}
                <div className="evento-noticia-estado">Leer Mas</div>

              </div>
            </div>
            </>   
          )  
  
  
        }
         
  }
  
  
  
  
  
  
   
    
    export default ComunicacionesNoticia;
    
  