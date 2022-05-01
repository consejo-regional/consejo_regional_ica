import React from 'react'
import {Link} from 'react-router-dom'


const MenuItem = ()=> {
      return(
        <>
      
    <header classNameN="header">
        <nav className="nav">
            <ul className="menuu menu2">
                <li className="item itemMenu">
                    <Link to="/inicio" className="link">INICIO </Link>
                   
                </li>
                <li className="item">
                    <Link to="/nosotros" className="link">NOSOTROS</Link>
                    <ul className="menuu submenu">
                        <li className="item">
                            <Link to="" className="link">BIENVENIDA</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link">INSTITUCION</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link">JUNTA DIRECTIVA</Link>
                            <ul className="menuu submenu">
                                <li className="item"><Link to="" className="link">subsubmenu1</Link></li>
                                <li className="item"><Link to="" className="link">subsubmenu1</Link></li>
                                <li className="item"><Link to="" className="link">sub submenu1</Link></li>
                                <li className="item"><Link to="" className="link">subsubmenu1</Link></li>
                            </ul>
                        </li>
                        
                        <li className="item">
                            <Link to="" className="link">SOCIEDADES CIENTIFICAS</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link">    COMITES    </Link>
                        </li>
                    </ul>
                </li>
                <li className="item">
                    <Link to="/tramites" className="link">TRAMITES</Link>
                    <ul className="menuu submenu">
                        <li className="item">
                            <Link to="" className="link">CONSTANCIA DE HABILIDAD</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link">INICIAR COLEGIATURA</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link">RECTIFICACION</Link>
                        </li>
                        
                        <li className="item">
                            <Link to="" className="link">ACTUALIZACION DE DATOS</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link">CONSTANCIA DE ETICA</Link>
                        </li>
                    </ul>
                </li>
                <li className="item">
                    <Link to="/servicios" className="link">SERVICIOS</Link>
                    <ul className="menuu submenu">
                        <li className="item">
                            <Link to="" className="link">BOLSA DE TRABAJO</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link">DIFUSION</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link">CONOCE A TU MEDICO</Link>
                        </li>
                    </ul>
                    </li>
                <li className="item">
                    <Link to="/comunicaciones" className="link">COMUNICACIONES</Link>
                    <ul className="menuu submenu">
                        <li className="item">
                            <Link to="" className="link">OPINION Y PRONUNCIAMIENTO</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link">DIFUSIONES                 </Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link">BOLETIN INFORMATIVO</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link">NOTICIAS                      </Link>
                        </li>
                    </ul>
                </li>
                <li className="item">
                    <Link to="/eventos" className="link">EVENTOS</Link>
                    <ul className="menuu submenu">
                        <li className="item">
                            <Link to="" className="link">CURSOS                </Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link">TALLERES             </Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link">CELEBRACIONES</Link>
                        </li>
                        <li className="item">
                            <Link to="" className="link">CAMPAÑAS MEDICAS</Link>
                        </li>
                    </ul>
                </li>
                <li className="item">
                    <Link to="/beneficios" className="link">BENEFICIOS</Link>
                </li>
                <li className="item">
                    <Link to="/centroRecreaciones" className="link">CENTRO DE RECREACIONES</Link>
                </li>
            </ul>
        </nav>
    </header>

        </>   
      )  
  }
  
  
  export default MenuItem;
  