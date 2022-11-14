import React,{useEffect,useRef,useState} from 'react'
import {Link} from 'react-router-dom'
// import {FlechaArriba,FlechaAbajo} from './menuItemComponente';


function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

//   function estados() {
//     const {nosotros,tramites} = false;
//     return {tramites,nosotros};
//   }


const MenuItem = ()=> {

    const boton=useRef()
    const togle_animation=useRef()
    const boton_desplegar_submenu_nosotros=useRef()
    const boton_desplegar_submenu_tramites=useRef()
    const boton_desplegar_submenu_servicios=useRef()
    const boton_desplegar_submenu_comunicaciones=useRef()
    const boton_desplegar_submenu_galeria=useRef()





    const [isActive, setActive] = useState({
        "nosotros":false,
        "tramites":false,
        "servicios":false,
        "comunicaciones":false,
        "galeria":false
    });


    const [windowSize, setWindowSize] = useState(getWindowSize());
 

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    



    const click=()=>{
        
        const Boton=boton.current
        Boton.classList.toggle('show')
        const Togle_animation=togle_animation.current
        Togle_animation.classList.toggle('opened')
        Togle_animation.setAttribute('aria-expanded', Togle_animation.classList.contains('opened'))
    
    }


 const click_deplegar_menu=(data)=>{
        if(data=="nosotros"){
            const Boton_desplegar_submenu_nosotros=boton_desplegar_submenu_nosotros.current
            Boton_desplegar_submenu_nosotros.classList.toggle("active")
             setActive({...isActive,nosotros:!isActive.nosotros})
        }
        if(data=="tramites"){
            const Boton_desplegar_submenu_tramites=boton_desplegar_submenu_tramites.current
            Boton_desplegar_submenu_tramites.classList.toggle("active")
            setActive({...isActive,tramites:!isActive.tramites})
        }
        if(data=="servicios"){
            const Boton_desplegar_submenu_servicios=boton_desplegar_submenu_servicios.current
            Boton_desplegar_submenu_servicios.classList.toggle("active")
            setActive({...isActive,servicios:!isActive.servicios})
        }
        if(data=="comunicaciones"){
            const Boton_desplegar_submenu_comunicaciones=boton_desplegar_submenu_comunicaciones.current
            Boton_desplegar_submenu_comunicaciones.classList.toggle("active")
            setActive({...isActive,comunicaciones:!isActive.comunicaciones})
        }
    
        if(data=="galeria"){
            const Boton_desplegar_submenu_galeria=boton_desplegar_submenu_galeria.current
            Boton_desplegar_submenu_galeria.classList.toggle("active")
            setActive({...isActive,galeria:!isActive.galeria})
        }
    
    
    
    }

   

      const [color,establecerColor]=useState(false)
      const cambiarColor=()=>{
          if(window.scrollY >= 50){
              establecerColor(true)
          }else{
              establecerColor(false)
          }
      }

    // useEffect(()=>{
    //     // const prueba=boton.current
    //     // prueba.addEventListener('click',()=>{
    //     //     console.log('accedi con la referencia')
    //     //     prueba.classlist.toggle('show')
    //     //     console.log(prueba)
    //     // })

    // },[])


    window.addEventListener("scroll",cambiarColor)
      return(
        <>
            <header className={color?"header header-color ":"header" }>
                <div className="header-conteiner">
                    <div   onClick={click} className="boton-menu-hamburguesa">
                        <div className="menu-togle-animation" 
                                    ref={togle_animation}
                                    aria-label="Main Menu">
                                        <svg width="100" height="100" viewBox="0 0 100 100" >
                                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                            <path className="line line2" d="M 20,50 H 80" />
                                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                        </svg>
                        </div>
                    </div>
                    <nav className="nav " ref={boton}>
                        <ul className="menuu ">
                            <li className="item itemMenu">
                                <Link to="/inicio"  onClick={click}  className="link">INICIO </Link>
                            </li>
                            <li className="item" ref={boton_desplegar_submenu_nosotros}   >
                                <Link to="/nosotros"  onClick={click}  className="link">NOSOTROS </Link>
                               {(windowSize.innerWidth<1080) 
                               ?
                                        isActive.nosotros?
                                        <section className="flecha_animacion" onClick={()=>click_deplegar_menu("nosotros")}   >
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
                                        :
                                        <section className="flecha_animacion"  onClick={()=>click_deplegar_menu("nosotros")}   >
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
                               :
                                
                                        <section className="flecha_animacion" >
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
                                }
                                <ul className="menuu submenu" >
                                    <li className="item">
                                        <Link to="/nosotros/colegioMedico" onClick={click} className="link linkSubmenu">EL COLEGIO MEDICO</Link>
                                    </li>
                                    <li className="item">
                                        <Link to="/nosotros/quienesSomos" onClick={click} className="link linkSubmenu">QUIENES SOMOS</Link>
                                    </li>
                                    <li className="item">
                                        <Link to="/nosotros/documentoNormativo" onClick={click} className="link linkSubmenu">DOCUMENTO NORMATIVO</Link>
                                    </li>
                                    <li className="item">
                                        <Link to="/nosotros/consejosDistritales" onClick={click} className="link linkSubmenu">CONSEJOS DISTRITALES</Link>
                                    </li>
                                    <li className="item">
                                        <Link to="/nosotros/pastDecanos" onClick={click} className="link linkSubmenu">PAST DECANOS</Link>
                                    </li>
                                    {/* <li className="item">
                                        <Link to="/nosotros/juntaDirectiva" onClick={click} className="link linkSubmenu">JUNTA DIRECTIVA</Link>
                                        <ul className="menuu submenu">
                                            <li className="item"><Link to="" className="link">subsubmenu1</Link></li>
                                            <li className="item"><Link to="" className="link">subsubmenu1</Link></li>
                                            <li className="item"><Link to="" className="link">sub submenu1</Link></li>
                                            <li className="item"><Link to="" className="link">subsubmenu1</Link></li>
                                        </ul>
                                    </li>
                                    */}
                                
                                    <li className="item">
                                        <a  href={process.env.PUBLIC_URL+"documentos/POLITICA-DE-CALIDAD-Y-CERTIFICADO.pdf"} target="_blank" onClick={click}  rel="noopener noreferrer" className="link linkSubmenu">POLITICA DE CALIDAD</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="item" ref={boton_desplegar_submenu_tramites}>
                                <Link to="/tramites"   className="link">TRAMITES</Link>
                                {(windowSize.innerWidth<1080) 
                               ?
                                        isActive.tramites?
                                        <section className="flecha_animacion" onClick={()=>click_deplegar_menu("tramites")}   >
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
                                        :
                                        <section className="flecha_animacion"  onClick={()=>click_deplegar_menu("tramites")}   >
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
                               :
                               <section className="flecha_animacion" >
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
                               }
                                <ul className="menuu submenu">
                                    <li className="item">
                                        <Link to="/tramites/constanciahabilidad" onClick={click} className="link linkSubmenu">CONSTANCIA DE HABILIDAD</Link>
                                    </li>
                                
                                    <li className="item">
                                        <a rel="noreferrer" href="https://200.48.13.39/prematricula/index.php" target="_blank" onClick={click} className="link linkSubmenu">INICIAR COLEGIATURA</a>
                                    </li>
                                    <li className="item">
                                        <a  rel="noreferrer" href="https://www.cmp.org.pe/registro-de-especialidad-o-sub-especialidad/"  target="_blank" onClick={click} className="link linkSubmenu">REGISTRO DE ESPECIALIDAD </a>
                                    </li>
                                    <li className="item">
                                        <a rel="noreferrer" href="https://www.cmp.org.pe/proceso-para-tramite-de-carne-de-colegiado/" target="_blank" onClick={click} className="link linkSubmenu">CARNET   DE COLEGIADO</a>
                                    </li>
                                    <li className="item">
                                        <a rel="noreferrer" href="https://www.zona.cmp.org.pe/index.php/ayuda/101-actualizacion-de-datos" target="_blank" onClick={click} className="link linkSubmenu">ACTUALIZACION DE DATOS</a>
                                    </li>
                                
                                </ul>
                            </li>
                            <li className="item" ref={boton_desplegar_submenu_servicios} >
                                <Link to="/servicios"    className="link">SERVICIOS</Link>
                                {(windowSize.innerWidth<1080) 
                               ?
                                        isActive.servicios?
                                        <section className="flecha_animacion" onClick={()=>click_deplegar_menu("servicios")}   >
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
                                        :
                                        <section className="flecha_animacion"  onClick={()=>click_deplegar_menu("servicios")}   >
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
                               :
                               
                               <section className="flecha_animacion" >
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

                               }

                                <ul className="menuu submenu">
                                    
                                    <li className="item">
                                        <a rel="noreferrer" href="https://www.cmp.org.pe/sistcere-2/"  target="_blank" onClick={click} className="link linkSubmenu">SISTCERE</a>
                                    </li>
                                    <li className="item">
                                        <a rel="noreferrer" href="https://www.cmp.org.pe/semefa/"  target="_blank" onClick={click} className="link linkSubmenu">SEMEFA</a>
                                    </li>
                                    <li className="item">
                                        <a rel="noreferrer" href="https://www.cmp.org.pe/defensoria-del-medico/"  target="_blank" onClick={click} className="link linkSubmenu">FOSEMED</a>
                                    </li>
                                    <li className="item">
                                        <a rel="noreferrer" href="https://www.cmp.org.pe/fosemed/"  target="_blank" onClick={click} className="link linkSubmenu">DEFENSORIA AL MEDICO</a>
                                    </li>
                                    <li className="item">
                                        <a rel="noreferrer" href="https://www.cmp.org.pe/conoce-a-tu-medico/"  target="_blank" onClick={click} className="link linkSubmenu">CONOCE A TU MEDICO</a>
                                    </li>
                                    
                                </ul>
                                </li>
                            <li className="item" ref={boton_desplegar_submenu_comunicaciones}>
                                <Link to="/comunicaciones"   className="link">COMUNICACIONES</Link>
                                {(windowSize.innerWidth<1080) 
                               ?
                                        isActive.comunicaciones?
                                        <section className="flecha_animacion" onClick={()=>click_deplegar_menu("comunicaciones")}   >
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
                                        :
                                        <section className="flecha_animacion"  onClick={()=>click_deplegar_menu("comunicaciones")}   >
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
                               :
                               <section className="flecha_animacion" >
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

                               }

                                <ul className="menuu submenu">

                                    <li className="item">
                                        <Link to="/comunicaciones/pronunciamiento" onClick={click} className="link linkSubmenu">OPINION Y PRONUNCIAMIENTO</Link>
                                    </li>
                                    <li className="item">
                                        <Link to="/comunicaciones/condolencias" onClick={click} className="link linkSubmenu">CONDOLENCIAS       </Link>
                                    </li>
                                
                                    <li className="item">
                                        <Link to="/comunicaciones/noticias" onClick={click} className="link linkSubmenu">NOTICIAS                      </Link>
                                    </li>
                                    <li className="item">
                                        <Link to="/comunicaciones/efemerides" onClick={click} className="link linkSubmenu">EFEMERIDES                     </Link>
                                    </li>
                                    <li className="item">
                                        <Link to="/comunicaciones/normativo" onClick={click} className="link linkSubmenu">NORMATIVO                     </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="item">
                                <Link to="/eventos"    className="link">EVENTOS</Link>
                            </li>
                            <li className="item">
                                <Link to="/comite"  onClick={click}  className="link">COMITES</Link>
                            </li>
                            <li className="item" ref={boton_desplegar_submenu_galeria}>
                                <Link to="/galeriaVideos"  onClick={click}  className="link">GALERIA</Link>
                                {(windowSize.innerWidth<1080) 
                               ?
                                        isActive.galeria?
                                        <section className="flecha_animacion" onClick={()=>click_deplegar_menu("galeria")}   >
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
                                        :
                                        <section className="flecha_animacion"  onClick={()=>click_deplegar_menu("galeria")}   >
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
                               :
                               <section className="flecha_animacion" >
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
                               }

                                <ul className="menuu submenu">
                                    <li className="item">
                                        <Link to="/galeriavideos" onClick={click} className="link linkSubmenu">CURSOS                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="item">
                                <Link to="/bolsatrabajo"  onClick={click}  className="link">BOLSA DE TRABAJO</Link>
                            </li>
                        </ul>
                        
                    </nav>
                </div>
                

            </header>

        </>   
      )  
  }



  
  
  export default MenuItem;
  