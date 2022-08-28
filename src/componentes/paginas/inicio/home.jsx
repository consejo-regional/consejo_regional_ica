import React  from 'react'

import SericiosGrid from '../servicios/serviciosGrid'
import FooterContacto from '../../componente/footer/footerContacto'
import {useEffect,useState} from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Publicaciones from './publicacionesDestacadas'
import PalabrasDecano from './palabrasDecano'
import NoticiasDestacadas from './noticiasDestacadas'
import AnimatedNumbers from "react-animated-numbers";
import {Slideshow, Slide} from '../../componente/slider/sliderautoplayinicio'
import GaleriaVideosInicio from './galeriaVideosInicio';



const Home = ()=> {

  const[contador,setContador]=useState([])
  const[informacion,setInformacion]=useState([])

   useEffect(()=>{
   AOS.init({duration: 1000})

   fetch("https://api.countapi.xyz/update/cmpica.org.pe/llavereact/?amount=1")
   .then(response=>response.json())
   .then(
    data=>setContador(data.value)
   )

   fetch("https://api.cmpica.org.pe/api/slider_principal/read.php")
   .then((res) => res.json())
   .then(
       // data=>console.log(data)
       data=>setInformacion(data)
   );

  },[])

      return(
        <>

        <main className="slider-principal">
          <Slideshow controles={true} autoplay={true} velocidad="6000" intervalo="3000">
                  {
                     informacion.map(c=>(
                          <Slide key={c.id}>
                                  <img src={process.env.PUBLIC_URL+`/`+ c.ruta} alt=""/>
                          </Slide>
                     ))
                  }  
          </Slideshow>
		   </main>

      
 
        <div data-aos="fade-up">
          <SericiosGrid></SericiosGrid> 
        </div>


        <div className="contenedor-separador-bloque">
            <hr className="separador-bloque"></hr>
        </div>

        <div data-aos="fade-up">
          <Publicaciones></Publicaciones>
        </div>


        <div className="contenedor-separador-bloque">
            <hr className="separador-bloque"></hr>
        </div>

      
        <GaleriaVideosInicio></GaleriaVideosInicio>


        <div className="contenedor-separador-bloque">
            <hr className="separador-bloque"></hr>
        </div>

        <PalabrasDecano></PalabrasDecano>

        <div className="contenedor-separador-bloque">
            <hr className="separador-bloque"></hr>
        </div>

        <NoticiasDestacadas></NoticiasDestacadas>

        <div className="contenedorContadorVisitas">
              <div className="countdown">
                      <div className="box">
                          <span className="text">Esta pagina ha sido vista</span>
                          <span className="num" id="day-box">
                                <AnimatedNumbers
                                      animateToNumber={contador}
                                      fontStyle={{ fontSize: 55 }}
                                      configs={
                                        [{"mass":1,"tension":30,"friction":10},{"mass":2,"tension":40,"friction":10},{"mass":3,"tension":30,"friction":10}]
                                      }   
                                    >
                              </AnimatedNumbers>   
                          </span>
                          <span className="text">VECES</span>
                      </div> 
              </div>
        </div>


        {/* <div data-aos="fade-up"> */}
        <FooterContacto></FooterContacto> 
        {/* </div> */}
        

        </>   
      )  
  }
  
  
  export default Home;
  