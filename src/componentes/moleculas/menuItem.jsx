import React,{useEffect,useRef} from 'react'
import {Link} from 'react-router-dom'




const MenuItem = ()=> {

    const boton=useRef()


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
      return(
        <>
      
    <header className="header">
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
                    <Link to="/nosotros" onClick={click} className="link">NOSOTROS</Link>
                    <ul className="menuu submenu">
                        <li className="item">
                            <Link to="/nosotros/bienvenida" onClick={click} className="link linkSubmenu">BIENVENIDA</Link>
                        </li>
                        <li className="item">
                            <Link to="/nosotros/institucion" className="link linkSubmenu">INSTITUCION</Link>
                        </li>
                        <li className="item">
                            <Link to="/nosotros/juntaDirectiva" className="link linkSubmenu">JUNTA DIRECTIVA</Link>
                            {/* <ul className="menuu submenu">
                                <li className="item"><Link to="" className="link">subsubmenu1</Link></li>
                                <li className="item"><Link to="" className="link">subsubmenu1</Link></li>
                                <li className="item"><Link to="" className="link">sub submenu1</Link></li>
                                <li className="item"><Link to="" className="link">subsubmenu1</Link></li>
                            </ul> */}
                        </li>
                        
                        <li className="item">
                            <Link to="/nosotros/sociedadesCientificas" className="link linkSubmenu">SOCIEDADES CIENTIFICAS</Link>
                        </li>
                        <li className="item">
                            <Link to="/nosotros/comite" className="link linkSubmenu">COMITES      </Link>
                        </li>
                    </ul>
                </li>
                <li className="item">
                    <Link to="/tramites"  onClick={click}  className="link">TRAMITES</Link>
                    <ul className="menuu submenu">
                        <li className="item">
                            <Link to="" className="link linkSubmenu">CONSTANCIA DE HABILIDAD</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link linkSubmenu">INICIAR COLEGIATURA</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link linkSubmenu">RECTIFICACION</Link>
                        </li>
                        
                        <li className="item">
                            <Link to="" className="link linkSubmenu">ACTUALIZACION DE DATOS</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link linkSubmenu">CONSTANCIA DE ETICA</Link>
                        </li>
                    </ul>
                </li>
                <li className="item">
                    <Link to="/servicios"  onClick={click}  className="link">SERVICIOS</Link>
                    <ul className="menuu submenu">
                        <li className="item">
                            <Link to="" className="link linkSubmenu">BOLSA DE TRABAJO</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link linkSubmenu">DIFUSION</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link linkSubmenu">CONOCE A TU MEDICO</Link>
                        </li>
                    </ul>
                    </li>
                <li className="item">
                    <Link to="/comunicaciones"  onClick={click}  className="link">COMUNICACIONES</Link>
                    <ul className="menuu submenu">
                        <li className="item">
                            <Link to="" className="link linkSubmenu">OPINION Y PRONUNCIAMIENTO</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link linkSubmenu">DIFUSIONES                 </Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link linkSubmenu">BOLETIN INFORMATIVO</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link linkSubmenu">NOTICIAS                      </Link>
                        </li>
                    </ul>
                </li>
                <li className="item">
                    <Link to="/eventos"  onClick={click}  className="link">EVENTOS</Link>
                    <ul className="menuu submenu">
                        <li className="item">
                            <Link to="" className="link linkSubmenu">CURSOS                </Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link linkSubmenu">TALLERES             </Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link linkSubmenu">CELEBRACIONES</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link linkSubmenu">CAMPAÑAS MEDICAS</Link>
                        </li>
                    </ul>
                </li>
                <li className="item">
                    <Link to="/beneficios"  onClick={click}  className="link">BENEFICIOS</Link>
                </li>
                <li className="item">
                    <Link to="/centroRecreaciones"  onClick={click}  className="link">CENTRO DE RECREACIONES</Link>
                </li>
            </ul>
        </nav>
        </div>
    </header>

        </>   
      )  
  }
  
  
  export default MenuItem;
  