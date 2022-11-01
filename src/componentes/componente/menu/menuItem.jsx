import React,{useEffect,useRef,useState} from 'react'
import {Link} from 'react-router-dom'


const MenuItem = ()=> {

    const boton=useRef()
    const togle_animation=useRef()

    const [color,establecerColor]=useState(false)
    const cambiarColor=()=>{

        if(window.scrollY >= 50){
            establecerColor(true)
        }else{
            establecerColor(false)
        }
    }


    const click=()=>{
        
        const prueba=boton.current
        prueba.classList.toggle('show')
    }

    const prueba=()=>{
        const Togle_animation=togle_animation.current
        Togle_animation.classList.toggle('opened');
        Togle_animation.setAttribute('aria-expanded', this.classList.contains('opened'))
        
    }

    useEffect(()=>{
        // const prueba=boton.current
        // prueba.addEventListener('click',()=>{
        //     console.log('accedi con la referencia')
        //     prueba.classlist.toggle('show')
        //     console.log(prueba)
        // })

    },[])


    window.addEventListener("scroll",cambiarColor)


    
      return(
        <>
      
            <header className={color?"header header-color ":"header" }>
                <div className="header-conteiner">
                
                <div   onClick={click} className="boton-menu-hamburguesa">
                    <div className="menu-togle-animation" 
                                onClick={prueba}
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

                        <li className="item">
                            <Link to="/nosotros"  className="link">NOSOTROS</Link>
                            <ul className="menuu submenu">
                                {/* <li className="item">
                                    <Link to="/nosotros/bienvenida" onClick={click} className="link linkSubmenu">BIENVENIDA</Link>
                                </li> */}
                                <li className="item">
                                    <Link to="/nosotros/colegioMedico" onClick={click} className="link linkSubmenu">EL COLEGIO MEDICO</Link>
                                </li>
                                <li className="item">
                                    <Link to="/nosotros/quienesSomos" onClick={click} className="link linkSubmenu">QUIENES SOMOS</Link>
                                </li>
                                
                                {/* <li className="item">
                                    <Link to="/nosotros/institucion" onClick={click} className="link linkSubmenu">INSTITUCION</Link>
                                </li> */}

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
                                {/* <li className="item">
                                    <Link to="/nosotros/sociedadesCientificas" onClick={click} className="link linkSubmenu">SOCIEDADES CIENTIFICAS</Link>
                                </li> */}
                                {/* <li className="item">
                                    <Link to="/nosotros/comite" onClick={click} className="link linkSubmenu">COMITES      </Link>
                                </li> */}


                                <li className="item">
                                    <a  href={process.env.PUBLIC_URL+"documentos/POLITICA-DE-CALIDAD-Y-CERTIFICADO.pdf"} target="_blank" onClick={click}  rel="noopener noreferrer" className="link linkSubmenu">POLITICA DE CALIDAD</a>
                                </li>
                            </ul>
                        </li>
                        <li className="item">
                            <Link to="/tramites"   className="link">TRAMITES</Link>
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
                                {/* <li className="item">
                                    <Link to="/tramites/rectificacion" onClick={click} className="link linkSubmenu">RECERTIFICACION</Link>
                                </li> */}
                                
                                <li className="item">
                                    <a rel="noreferrer" href="https://www.zona.cmp.org.pe/index.php/ayuda/101-actualizacion-de-datos" target="_blank" onClick={click} className="link linkSubmenu">ACTUALIZACION DE DATOS</a>
                                </li>
                                {/* <li className="item">
                                    <Link to="/tramites/constanciaEtica"  onClick={click} className="link linkSubmenu">CONSTANCIA DE ETICA</Link>
                                </li> */}
                            </ul>
                        </li>
                        <li className="item">
                            <Link to="/servicios"    className="link">SERVICIOS</Link>
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
                        <li className="item">
                            <Link to="/comunicaciones"   className="link">COMUNICACIONES</Link>
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
                            <ul className="menuu submenu">
                                {/* <li className="item">
                                    <Link to="/eventos" onClick={click} className="link linkSubmenu">CURSOS                </Link>
                                </li>
                                <li className="item">
                                    <Link to="/eventos" onClick={click} className="link linkSubmenu">TALLERES             </Link>
                                </li>
                                <li className="item">
                                    <Link to="/eventos" onClick={click} className="link linkSubmenu">CELEBRACIONES</Link>
                                </li>
                                <li className="item">
                                    <Link to="/eventos" onClick={click} className="link linkSubmenu">CAMPAÑAS MEDICAS</Link>
                                </li> */}
                            </ul>
                        </li>
                        {/* <li className="item">
                            <Link to="/beneficios"  onClick={click}  className="link">BENEFICIOS</Link>
                        </li>
                        <li className="item">
                            <Link to="/centroRecreaciones"  onClick={click}  className="link">CENTRO DE RECREACIONES</Link>
                        </li> */}
                        <li className="item">
                            <Link to="/comite"  onClick={click}  className="link">COMITES</Link>
                        </li>
                        <li className="item">
                            <Link to="/galeriaVideos"  onClick={click}  className="link">GALERIA</Link>
                            <ul className="menuu submenu">
                                {/* <li className="item">
                                    <Link to="/galeriafotos" onClick={click} className="link linkSubmenu">GALERIA DE FOTOS                </Link>
                                </li> */}
                                <li className="item">
                                    <Link to="/galeriavideos" onClick={click} className="link linkSubmenu">CURSOS                        </Link>
                                </li>
                                
                            </ul>
                        </li>
                        <li className="item">
                            <Link to="/bolsatrabajo"  onClick={click}  className="link">BOLSA DE TRABAJO</Link>
                        </li>
                        {/* <li className="item">
                            <Link to="/biblioteca"  onClick={click}  className="link">BIBLIOTECA</Link>
                        </li> */}


                        {/* <li className="item-cmpDiguital">
                        <CmpDiguital></CmpDiguital>
                        </li>
                        */}
                    </ul>
                    
                </nav>
                </div>
                

            </header>

        </>   
      )  
  }
  
  
  export default MenuItem;
  