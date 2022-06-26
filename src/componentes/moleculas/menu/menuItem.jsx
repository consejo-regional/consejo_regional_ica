import React,{useEffect,useRef,useState} from 'react'
import {Link} from 'react-router-dom'
import CmpDiguital from '../cmpDiguital'




const MenuItem = ()=> {

    const boton=useRef()

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
        console.log(boton.current)


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
        {/* <div>dvsdfvdfsdf</div> */}

        <div className="header-conteiner">
        
        <div   onClick={click} className="boton-menu-hamburguesa show">
       
        </div>
        <nav className="nav " ref={boton}>
            <ul className="menuu ">
                <div   onClick={click} className="boton-menu-hamburguesa boton-menu-hamburguesa-cerrar show"></div>

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
                        {/* <li className="item">
                            <Link to="/comunicaciones" onClick={click} className="link linkSubmenu">DIFUSIONES                 </Link>
                        </li> */}
                        {/* <li className="item">
                            <Link to="/comunicaciones" onClick={click} className="link linkSubmenu">BOLETIN INFORMATIVO</Link>
                        </li> */}
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
                    <Link to="/nosotros/comite"  onClick={click}  className="link">COMITES</Link>
                </li>
                {/* <li className="item">
                    <Link to="/biblioteca"  onClick={click}  className="link">BIBLIOTECA</Link>
                </li> */}
                 <li className="item-cmpDiguital">
                 <CmpDiguital></CmpDiguital>
                </li>
               
            </ul>
            
        </nav>
        </div>
        

    </header>

        </>   
      )  
  }
  
  
  export default MenuItem;
  