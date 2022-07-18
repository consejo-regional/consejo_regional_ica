import React from 'react'


const JuntaDirectiva = ()=> {

    var contenido = {
        titulo: 'JUNTA DIRECTIVA',
        descripccion: 'La gestión para el periodo 2022-2024 está liderada por el Dr. Luis Felipe Muñante Aparcana, Decano del Consejo Regional de Ica del Colegio Médico del Peru y su Junta Directiva está conformada por un grupo de médicos profesionales de gran trayectoria entre académicos y gremiales.'
    }
      return(
        
        <>
        <div className="datos">
     
        <h2>{contenido.titulo}</h2>
        <div className="conteiner-datos">
            <h4></h4>
            <h4 className="contenido_cart_descripccion">{contenido.descripccion}</h4> 
            <div className="contenido-izquierda">
               
            </div>

        </div>
        <div className="contenedor_junta_grid">
              <SericiosItem imagen={process.env.PUBLIC_URL + `/directivos/DECANO.png`} nombre="Luis Felipe Muñante Aparcana." description="Decano"></SericiosItem>

              
          </div>
         <div className="contenedor_junta1_grid">

              <SericiosItem imagen={process.env.PUBLIC_URL + `/directivos/DSC_7035.png`} nombre="" description="Tesorero"></SericiosItem>
              <SericiosItem imagen={process.env.PUBLIC_URL + `/directivos/DSC_7042.png`} nombre="" description="Secretario"></SericiosItem>
              
          </div>
          <div className="contenedor_junta1_grid">
              <SericiosItem imagen={process.env.PUBLIC_URL + `/directivos/DSC_7045.png`} nombre="" description="Vocal1"></SericiosItem>
              <SericiosItem imagen={process.env.PUBLIC_URL + `/directivos/DSC_7048.png`} nombre="" description="Vocal2"></SericiosItem>
              
          </div>
          <div className="contenedor_junta1_grid">
              <SericiosItem imagen={process.env.PUBLIC_URL + `/imagenes/mujer.png`} nombre="" description="Accesitario1"></SericiosItem>
              <SericiosItem imagen={process.env.PUBLIC_URL + `/imagenes/hombre.png`} nombre="" description="Accesitario2"></SericiosItem>
      
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
  