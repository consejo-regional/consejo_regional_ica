import React from 'react'
import Cart from '../moleculas/cart';


import imagen1 from '../../assets/imagenes/IMAGE-1.png'
import imagen2 from '../../assets/imagenes/IMAGE-2.png'
import imagen3 from '../../assets/imagenes/IMAGE-3.png'
import imagen4 from '../../assets/imagenes/IMAGE-4.png'
import imagen5 from '../../assets/imagenes/IMAGE-5.png'
import imagen6 from '../../assets/imagenes/IMAGE-6.png'
import imagen7 from '../../assets/imagenes/IMAGE-7.png'








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
            <h4 className="contenido_cart_descripccion">{contenido.descripccion}</h4> 
            <div className="contenido-izquierda">
                <Cart></Cart>
            </div>

        </div>
        <div className="contenedor_servicios_grid">
              <SericiosItem imagen={imagen1} nombre="Luis Felipe Muñante Aparcana." description="Decano"></SericiosItem>
              <SericiosItem imagen={imagen2} nombre="Alexander Humberto pecho peche." description="Secretario"></SericiosItem>
              <SericiosItem imagen={imagen3} nombre="Flor Elizabeth aviles Bonifaz" description="Tesoresa"></SericiosItem>
              <SericiosItem imagen={imagen4} nombre="Audiaz Perez Aguirre" description="Vocal"></SericiosItem>
              <SericiosItem imagen={imagen5} nombre="Flor de maría mejia escate" description="vocal"></SericiosItem>
              <SericiosItem imagen={imagen6} nombre="Roberto laos Olaechea" description="Accesitario"></SericiosItem>
              <SericiosItem imagen={imagen7} nombre="Carlos Cagna Puppi " description="Accesitario"></SericiosItem>
           
           
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
  