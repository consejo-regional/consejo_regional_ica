import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';

import {useEffect,useState} from "react"
import {Link} from 'react-router-dom'



const Publicaciones = ()=> {
      return(
        <>
        <div className="contenedor-publicaciones">

                <div className="contenedor-serviciosGrid-titulo">
                        <div className="contenedor-serviciosGrid-logo">
                            <div className="logo-colegio-svg"></div>
                        </div>
                        <div className="contenedor-serviciosGrid-contenido">
                            <div className="contenedor-serviciosGrid-contenido-conteiner">

                                <div className="contenedor-serviciosGrid-contenido1">PUBLICACIONES</div>
                                <div className="contenedor-serviciosGrid-contenido2">DESTACADOS</div>
                            </div>
                        </div>

                    </div>

            <div className="contendor-slider-varios">
                <main className="slider-comunicados">
                    <p className="titulo">COMUNICADOS</p>
                    <SliderComunicados></SliderComunicados>
                </main>
                <main className="slider-comunicados">
                    <p className="titulo">CURSOS EVENTOS</p>
                    <SliderEventos></SliderEventos>
                </main>
                <main className="slider-comunicados">
                    <p className="titulo">NOTICIAS</p>
                    <SliderNoticias></SliderNoticias>
                </main>
            </div>

        </div>
        </>   
      )  
  }

  function SliderEventos() {
  
    // State for Active index
    const [activeIndex, setActiveIndex] = useState(0);
  
    // State for Animation
    const [animating, setAnimating] = useState(false);

    const[informacion,setInformacion]=useState([])

    useEffect(()=>{

    fetch("https://api.cmpica.org.pe/api/eventos/read.php")
    .then((res) => res.json())
    .then(
        data=>setInformacion(data)
    );
 
   },[])
  
    // Items array length
    const itemLength = informacion.length - 1
  
    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    // Carousel Item Data
    const carouselItemData = informacion.map((c) => {
        return (
            <CarouselItem
                key={c.id}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <Link to="/eventos">

                   <img src={process.env.PUBLIC_URL+`/`+ c.imagen}  className="img-fluid" />
                </Link>



            </CarouselItem>
        );
    });
  
    return (
       
            <Carousel previous={previousButton} next={nextButton}

            className="carousel-fade carrusuelComunicados"
                activeIndex={activeIndex}>
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton} />
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />
            </Carousel>
        
    );
}


function SliderComunicados() {
  
    // State for Active index
    const [activeIndex, setActiveIndex] = useState(0);
  
    // State for Animation
    const [animating, setAnimating] = useState(false);

    const[informacion,setInformacion]=useState([])

    useEffect(()=>{

    fetch("https://api.cmpica.org.pe/api/opinion_y_pronunciamiento/read.php")
    .then((res) => res.json())
    .then(
        data=>setInformacion(data)
    );
 
   },[])
  
    // Items array length
    const itemLength = informacion.length - 1
  
    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    // Carousel Item Data
    const carouselItemData = informacion.map((c) => {
        return (
            <CarouselItem
                key={c.id}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
            <Link to="/comunicaciones/pronunciamiento">
                <img src={process.env.PUBLIC_URL+`/`+ c.ruta}  className="img-fluid" />
            </Link>
            
            </CarouselItem>
        );
    });
  
    return (
       
            <Carousel previous={previousButton} next={nextButton}

            className="carousel-fade carrusuelComunicados"
                activeIndex={activeIndex}>
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton} />
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />
            </Carousel>
        
    );
}


function SliderNoticias() {
  
    // State for Active index
    const [activeIndex, setActiveIndex] = useState(0);
  
    // State for Animation
    const [animating, setAnimating] = useState(false);

    const[informacion,setInformacion]=useState([])

    useEffect(()=>{

    fetch("https://api.cmpica.org.pe/api/noticias/read.php")
    .then((res) => res.json())
    .then(
        data=>setInformacion(data)
    );
 
   },[])
  
    // Items array length
    const itemLength = informacion.length - 1
  
    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    // Carousel Item Data
    const carouselItemData = informacion.map((c) => {
        return (
            <CarouselItem
                key={c.id}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <Link to="/comunicaciones/noticias">
                    <img src={process.env.PUBLIC_URL+`/`+ c.imagen}  className="img-fluid" />
                </Link>
            </CarouselItem>
        );
    });
  
    return (
       
            <Carousel previous={previousButton} next={nextButton}

            className="carousel-fade carrusuelComunicados"
                activeIndex={activeIndex}>
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton} />
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />
            </Carousel>
        
    );
}
   
  export default Publicaciones;
  