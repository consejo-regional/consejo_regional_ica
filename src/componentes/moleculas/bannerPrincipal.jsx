import React from 'react'
import MenuItem from './menuItem';



class BannerPrincipal extends React.Component {

        componentDidMount(){
            var slideIndex = 1;
            showSlides(slideIndex);

            function plusSlides(n) {
                showSlides(slideIndex += n);
            }

            function currentSlide(n) {
                showSlides(slideIndex = n);
            }

            function showSlides(n) {
                var i;
                var slides = document.getElementsByClassName("mySlides-banner-Principal");
                var dots = document.getElementsByClassName("puntoss");
                if (n > slides.length) { slideIndex = 1 }
                if (n < 1) { slideIndex = slides.length }
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" actives", "");
                }
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " actives";
            }


            // Auto Slide   if you need auto slide ,remove the commit "//"



            var slideIndex = 0;

            function showSlides() {
                var i;
            var slides = document.getElementsByClassName("mySlides-banner-Principal");
            var dots = document.getElementsByClassName("puntoss");


            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" actives", ""); 
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " actives";


            }
            setInterval(showSlides,8000)
        
        
        }

        render(){
            return(
                <>
                <MenuItem></MenuItem>
                <div className="slideshow-container-banner">
        
                    <div className="mySlides-banner-Principal fades">
                        <div  className="fondo-banner fondo-banner01"></div>
                    </div>
        
                    <div className="mySlides-banner-Principal fades">
                        <div  className="fondo-banner fondo-banner02 "></div>
        
                    </div>
        
                    <div className="mySlides-banner-Principal fades">
                        <div  className="fondo-banner fondo-banner03"></div>
                    </div>
                    <div className="slogan-banner">
                        <h4>NUESTRA ESPECIALIDAD ES CURARTE</h4>
                        <h6>contamos  con profesionales calificados para atender las necesidades de salud,brindandole  diagnosticos,pronosticos y tratamiento adecuado</h6>
                    </div>
                    <div className="contenedor-puntos">
                        <span className="puntoss" onclick="currentSlide(1)"></span>
                        <span className="puntoss" onclick="currentSlide(2)"></span>
                        <span className="puntoss" onclick="currentSlide(3)"></span>
                    </div>
                    <a className="previo" onclick="plusSlides(-1)">
                        <svg width="2em" height="2em" viewBox="0 0 75 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.02504 54.4108C-2.25161 47.7703 -2.11097 31.4126 9.27821 24.967L48.9641 2.50717C60.3533 -3.93844 74.4491 4.36219 74.3366 17.4483L73.9444 63.0472C73.8319 76.1333 59.5954 84.1904 48.3188 77.5499L9.02504 54.4108Z" fill="Currentcolor"/>
                            </svg>
                            
                            
                    </a>
                    <a className="nextt" onclick="plusSlides(1)">
                        <svg width="2em" height="2em" viewBox="0 0 75 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M65.9195 25.566C77.1962 32.2065 77.0555 48.5642 65.6664 55.0098L25.9805 77.4696C14.5913 83.9152 0.495483 75.6146 0.608017 62.5285L1.00014 16.9296C1.11268 3.84347 15.3492 -4.21356 26.6258 2.42695L65.9195 25.566Z" fill="Currentcolor"/>
                            </svg>
                    </a>
        
                </div>
             
                </>   
              )  
        }
     
  }
  
  
  export default BannerPrincipal;
  