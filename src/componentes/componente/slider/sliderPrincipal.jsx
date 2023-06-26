import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';

import {useEffect,useState} from "react"



function SliderPrincipal() {
  
    // State for Active index
    const [activeIndex, setActiveIndex] = useState(0);
  
    // State for Animation
    const [animating, setAnimating] = useState(false);

    const[informacion,setInformacion]=useState([])

    useEffect(()=>{

    fetch(`${process.env.REACT_APP_URL_API}slider_principal/read.php`)
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
                key={c.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img src={process.env.PUBLIC_URL+`/`+ c.src}  className="img-fluid" alt="" />
            </CarouselItem>
        );
    });
  
    return (
       
            <Carousel previous={previousButton} next={nextButton} interval="2000"
            className="carousel-fade"
                activeIndex={activeIndex}>
                <CarouselIndicators 
                    items={informacion}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton} />
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />
            </Carousel>
        
    );
}
  
export default SliderPrincipal;