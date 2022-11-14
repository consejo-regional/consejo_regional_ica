import React from 'react';

const FlechaArriba = ({funcion}) => {
    return (
        <>
            <section className="flecha_animacion" onClick={funcion}   >
                 <p>
                     <span class="arrow-animated arrow-up">
                         <svg viewBox="0 0 33.63 36.95">
                             <polyline points="14.13 1.03 31.57 18.47 14.13 35.92"/>
                             <polyline points="7.58 7.57 18.48 18.47 7.58 29.38"/>
                             <polyline points="1.03 14.11 5.39 18.47 1.03 22.84"/>
                         </svg>
                     </span>
                 </p>
            </section>  
        </>
    );
}

const FlechaAbajo = ({funcion}) => {
    return (
        <>
            <section className="flecha_animacion" onClick={funcion}   >
                 <p>
                     <span class="arrow-animated arrow-down">
                         <svg viewBox="0 0 33.63 36.95">
                             <polyline points="14.13 1.03 31.57 18.47 14.13 35.92"/>
                             <polyline points="7.58 7.57 18.48 18.47 7.58 29.38"/>
                             <polyline points="1.03 14.11 5.39 18.47 1.03 22.84"/>
                         </svg>
                     </span>
                 </p>
            </section>  
        </>
    );
}



export {FlechaAbajo,FlechaArriba};
