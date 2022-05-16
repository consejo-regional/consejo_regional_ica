import React from 'react'
import imagen1 from '../../assets/imagenes/IMAGE-1.png'
import imagen2 from '../../assets/imagenes/IMAGE-2.png'
import imagen3 from '../../assets/imagenes/IMAGE-3.png'
import imagen4 from '../../assets/imagenes/IMAGE-4.png'
// import imagen5 from '../../assets/imagenes/IMAGE-5.png'
// import imagen6 from '../../assets/imagenes/IMAGE-6.png'
// import imagen7 from '../../assets/imagenes/IMAGE-7.png'




const servicios=[{
  imagen:imagen1,
  nombre:"SISTCERE",
  description:"",
  enlace:"https://www.cmp.org.pe/sistcere-2/"
},{
  imagen:imagen2,
  nombre:"SEMEFE",
  description:"",
  enlace:"https://www.cmp.org.pe/semefa/"
},{
  imagen:imagen2,
  nombre:"FOSEMED",
  description:"",
  enlace:"https://www.cmp.org.pe/fosemed/"
},{
  imagen:imagen2,
  nombre:"DEFENSORIA DEL MEDICO",
  description:"",
  enlace:"https://www.cmp.org.pe/defensoria-del-medico/"
},{
  imagen:imagen3,
  nombre:"CONOCE A TU MEDICO",
  description:"",
  enlace:"https://www.cmp.org.pe/conoce-a-tu-medico/"
}
]


const SericiosGrid = ()=> {
      return(
        <>
        <div className="contenedor_servicios_grid_conteiner">
        <div className="contenedor-evento-titulo">
                <h4>Consejo Regional IX – ICA </h4>
                <h1>NUESTROS SERVICIOS</h1>
        </div>
          <div className="contenedor_servicios_grid">
            {
              servicios.map(c=>(
                <SericiosItem imagen={c.imagen} nombre={c.nombre} description={c.description} enlace={c.enlace}></SericiosItem>
              ))
            }
            
          </div>
        </div>
        </>   
      )  
  }

  const SericiosItem = ({imagen,nombre,description,enlace})=> {
    return(
      <>
      <a href={enlace} target="_blank" className="contenedor_servicios_item">
        <img className="servicios imagen" src={imagen} alt={imagen}></img>
        <div className="servicios-nombre">{nombre}</div>
        <div className="servicios-description">{description}</div>
      </a>
      </>   
    )  
}
  
  
  export default SericiosGrid;
  