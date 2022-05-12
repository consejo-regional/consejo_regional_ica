import React , {useEffect} from 'react'
import imagen1 from '../../assets/imagenes/eventos/IMAGE-1.png'
import imagen2 from '../../assets/imagenes/eventos/CARDIOLOGIA.png'
import imagen3 from '../../assets/imagenes/eventos/LA BIOETICA Y EL CASO TUSKEE.png'
import imagen4 from '../../assets/imagenes/eventos/Group 32.png'
import imagen5 from '../../assets/imagenes/eventos/EVENTO1.png'
import {Link} from 'react-router-dom'







const informacion=[{
  imagen:imagen5,
  description:"Reunion Multisectorial – 09 mayo",
  fecha:"2022/05/09",
  tipo:"NOTICIA"
},{
  imagen:imagen2,
  description:"Modulo Cardiologia",
  fecha:"2002/05/13; 2002/05/20  ;2002/05/13 ",
  tipo:"EVENTO"
},{
  imagen:imagen3,
  description:"Teleconferencia Bioetica y el caso Tuskegee",
  fecha:"2021/04/29",
  tipo:"EVENTO"
},{
  imagen:imagen4,
  description:"Seminario Busqueda Eficiencia de Informacion Cientifica en Medicina",
  fecha:"2015/04/22",
  tipo:"EVENTO"
}]



const Eventos = ()=> {

      return(

       
        <>
        <div className="contenedor-eventos"  >
            <div className="contenedor-evento-titulo">
                <h4>Consejo Regional IX – ICA </h4>
                <h1>NOTICIAS / EVENTOS</h1>
            </div>
            <div className="contenedor_eventos_grid">
                {

                  informacion.map(c=>(
                    <SericiosItem  imagen={c.imagen} description={c.description} fecha={c.fecha} tipo={c.tipo} ></SericiosItem>
                  ))

                  
                }   
            </div>
        </div>
        </>   
      )  
  }


  const SericiosItem = ({imagen,description,fecha,tipo})=> {


      if(tipo=="NOTICIA"){
        return(
          <>
         
          <Link className="eventos-clase"  to="/comunicaciones/noticias">
            <img className="imagen-evento" src={imagen} alt={imagen}></img>
            <div className="evento-noticia">
              <div className="evento-noticia-descripccion colors">{tipo}</div>
              <div className="evento-noticia-descripccion">{description}</div>
              <div className="evento-noticia-descripccion">{fecha}</div>
            </div>
          </Link>
          </>   
        )  

      } if(tipo=="EVENTO"){
        return(
          <>
          <Link className="eventos-clase"  to="/eventos">
            <img className="imagen-evento" src={imagen} alt={imagen}></img>
            <div className="evento-noticia">
              <div className="evento-noticia-descripccion colors">{tipo}</div>
              <div className="evento-noticia-descripccion">{description}</div>
              <div className="evento-noticia-descripccion">{fecha}</div>
            </div>
          </Link>
          </>   
        )  

      }
       
}






 
  
  export default Eventos;
  