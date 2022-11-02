import React from 'react'


const JuntaDirectiva = ()=> {

    var contenido = {
        titulo: 'JUNTA DIRECTIVA',
        descripccion: 'La gestión para el periodo 2022-2024 está liderada por el Dr. Luis Felipe Muñante Aparcana, Decano del Consejo Regional de Ica del Colegio Médico del Peru y su Junta Directiva está conformada por un grupo de médicos profesionales de gran trayectoria entre académicos y gremiales.'
    }
      return(
        
        <>
        <div className="datos">
     
        <h4>{contenido.titulo}</h4>
        <div className="conteiner-datos">
            <h4></h4>
            <p className="contenido_cart_descripccion">{contenido.descripccion}</p> 
            <div className="contenido-izquierda">
               
            </div>

        </div>
        <div className="contenedor_junta_grid">
              <SericiosItem imagen={process.env.PUBLIC_URL + `/directivos/DECANO.png`} nombre="Dr. Luis Felipe Muñante Aparcana." description="Decano"></SericiosItem>

              
          </div>
         <div className="contenedor_junta1_grid">

              <SericiosItem imagen={process.env.PUBLIC_URL + `/directivos/DSC_7045.png`} nombre="Dra. FLor Elizabeth Aviles Bonifaz" description="Tesorero"></SericiosItem>
              <SericiosItem imagen={process.env.PUBLIC_URL + `/directivos/DSC_7052.png`} nombre="Dr. ALexander Humberto Pecho Peche" description="Secretario"></SericiosItem>
              
          </div>
          <div className="contenedor_junta1_grid">
              <SericiosItem imagen={process.env.PUBLIC_URL + `/imagenes/hombre.png`} nombre="Dr.Audias Josué Pérez Aguirre" description="Vocal I"></SericiosItem>
              <SericiosItem imagen={process.env.PUBLIC_URL + `/directivos/DSC_7042.png`} nombre="Dra. Flor de Maria Mejia Escate" description="Vocal II"></SericiosItem>
              
          </div>
          <div className="contenedor_junta1_grid">
              <SericiosItem imagen={process.env.PUBLIC_URL + `/directivos/DSC_7035.png`} nombre="Dr. Roberto Augusto Laos Olaechea" description="Accesitario I"></SericiosItem>
              <SericiosItem imagen={process.env.PUBLIC_URL + `/directivos/DSC_7048.png`} nombre="Dr. Carlos Fernando Cagna Puppi" description="Accesitario II"></SericiosItem>
      
          </div>


          

        </div>
        
        </>   
      )  
  }


  const SericiosItem = ({imagen,nombre,description})=> {
    return(
      <>
      <div className="contenedor_servicios_item">
        <img className="servicios imagen" src={imagen} alt={imagen}></img>
        <div className="servicios-nombre">{nombre}</div>
        <div className="servicios-description">{description}</div>
      </div>
      </>   
    )  
}



  
  
  export default JuntaDirectiva;
  