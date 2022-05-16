import React from 'react'
import Cart from '../moleculas/cart';


import imagen1 from '../../assets/directivos/DSC_7035.png'
import imagen2 from '../../assets/directivos/DSC_7042.png'
import imagen3 from '../../assets/directivos/DSC_7045.png'
import imagen4 from '../../assets/directivos/DSC_7048.png'
import imagen5 from '../../assets/directivos/DSC_7052.png'
// import imagen6 from '../../assets/directivos/DSC_7035.png'
// import imagen7 from '../../assets/directivos/DSC_7035.png'

import hombre from '../../assets/imagenes/hombre.png'
import mujer from '../../assets/imagenes/mujer.png'








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
                <Cart></Cart>
            </div>

        </div>
        <div className="contenedor_servicios_grid">
              <SericiosItem imagen={imagen1} nombre="" description=""></SericiosItem>
              <SericiosItem imagen={imagen2} nombre="" description=""></SericiosItem>
              <SericiosItem imagen={imagen3} nombre="" description=""></SericiosItem>
              <SericiosItem imagen={imagen4} nombre="" description=""></SericiosItem>
              <SericiosItem imagen={mujer} nombre="" description=""></SericiosItem>
              <SericiosItem imagen={hombre} nombre="" description=""></SericiosItem>
              <SericiosItem imagen={hombre} nombre="" description=""></SericiosItem>
              
              

              {/* <SericiosItem imagen={imagen1} nombre="Luis Felipe Muñante Aparcana." description="Decano"></SericiosItem>
              <SericiosItem imagen={imagen2} nombre="Alexander Humberto pecho peche." description="Secretario"></SericiosItem>
              <SericiosItem imagen={imagen3} nombre="Flor Elizabeth aviles Bonifaz" description="Tesoresa"></SericiosItem>
              <SericiosItem imagen={imagen4} nombre="Audiaz Perez Aguirre" description="Vocal"></SericiosItem>
              <SericiosItem imagen={mujer} nombre="Flor de maría mejia escate" description="vocal"></SericiosItem>
              <SericiosItem imagen={hombre} nombre="Roberto laos Olaechea" description="Accesitario"></SericiosItem>
              <SericiosItem imagen={hombre} nombre="Carlos Cagna Puppi " description="Accesitario"></SericiosItem>
               */}
              
           
           
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
  