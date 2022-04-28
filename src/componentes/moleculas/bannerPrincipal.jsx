import React ,{useEffect} from 'react'


const BannerPrincipal = ()=> {

    useEffect(()=>{

    },[])

      return(
        <>
        <div className="contenedor-banner-principal">
         
            <div className="slider">
             
              

            </div>
            <div className="contenedor-puntos">
                <div className="punto"></div>
                <div className="punto"></div>
                <div className="punto"></div>
              </div>
            <div className="boton derecho">
              <svg width="2em" height="2em" viewBox="0 0 75 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.02504 54.4108C-2.25161 47.7703 -2.11097 31.4126 9.27821 24.967L48.9641 2.50717C60.3533 -3.93844 74.4491 4.36219 74.3366 17.4483L73.9444 63.0472C73.8319 76.1333 59.5954 84.1904 48.3188 77.5499L9.02504 54.4108Z" fill="Currentcolor"/>
              </svg>
            </div>
            <div className="boton izquierdo">
              <svg width="2em" height="2em" viewBox="0 0 75 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M65.9195 25.566C77.1962 32.2065 77.0555 48.5642 65.6664 55.0098L25.9805 77.4696C14.5913 83.9152 0.495483 75.6146 0.608017 62.5285L1.00014 16.9296C1.11268 3.84347 15.3492 -4.21356 26.6258 2.42695L65.9195 25.566Z" fill="Currentcolor"/>
              </svg>
            </div>
        </div>
        </>   
      )  
  }
  
  
  export default BannerPrincipal;
  