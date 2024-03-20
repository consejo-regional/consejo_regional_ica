import React,{useEffect,useRef,useState} from 'react'
import {Link} from 'react-router-dom'
import { DarkModeSwitch } from 'react-toggle-dark-mode';


function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }


const MenuItem = ()=> {

    const [isDarkMode, setDarkMode] = React.useState(false);

    const[informacion,setInformacion]=useState([])

    useEffect(()=>{
        fetch( `${process.env.REACT_APP_URL_API}menu/read.php`)

        .then((res) => res.json())
        .then(
            // data=>console.log(data)
            data=>setInformacion(data)
        );
    },[])



    const toggleDarkMode = (checked) => {
      setDarkMode(checked);
      console.log('hola mundo')
      document.body.classList.toggle('dark');
    };

    const boton=useRef()
    const togle_animation=useRef()
    const boton_desplegar_submenu_nosotros=useRef()
    const boton_desplegar_submenu_tramites=useRef()
    const boton_desplegar_submenu_comunicaciones=useRef()
    const boton_desplegar_submenu_galeria=useRef()

    const [isActive, setActive] = useState({
        "nosotros":false,
        "tramites":false,
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
        if(data==="nosotros"){
            const Boton_desplegar_submenu_nosotros=boton_desplegar_submenu_nosotros.current
            Boton_desplegar_submenu_nosotros.classList.toggle("active")
             setActive({...isActive,nosotros:!isActive.nosotros})
        }
        if(data==="tramites"){
            const Boton_desplegar_submenu_tramites=boton_desplegar_submenu_tramites.current
            Boton_desplegar_submenu_tramites.classList.toggle("active")
            setActive({...isActive,tramites:!isActive.tramites})
        }
        
        if(data==="comunicaciones"){
            const Boton_desplegar_submenu_comunicaciones=boton_desplegar_submenu_comunicaciones.current
            Boton_desplegar_submenu_comunicaciones.classList.toggle("active")
            setActive({...isActive,comunicaciones:!isActive.comunicaciones})
        }
    
        if(data==="galeria"){
            const Boton_desplegar_submenu_galeria=boton_desplegar_submenu_galeria.current
            Boton_desplegar_submenu_galeria.classList.toggle("active")
            setActive({...isActive,galeria:!isActive.galeria})
        }
    }

    const MenuComponente=({variable,data})=>{
        return(
        <>
           {(windowSize.innerWidth<1080) 
             ?
                      variable?
                      <section className="flecha_animacion" onClick={()=>click_deplegar_menu(data)}   >
                              <p>
                                  <span className="arrow-animated arrow-up">
                                      <svg viewBox="0 0 33.63 36.95">
                                          <polyline points="14.13 1.03 31.57 18.47 14.13 35.92"/>
                                          <polyline points="7.58 7.57 18.48 18.47 7.58 29.38"/>
                                          <polyline points="1.03 14.11 5.39 18.47 1.03 22.84"/>
                                      </svg>
                                  </span>
                              </p>
                      </section>  
                      :
                      <section className="flecha_animacion"  onClick={()=>click_deplegar_menu(data)}   >
                          <p>
                              <span className="arrow-animated arrow-down">
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
        </>
        )
    }


      const [color,establecerColor]=useState(false)
      const cambiarColor=()=>{
          if(window.scrollY >= 100){
              establecerColor(true)
          }else{
              establecerColor(false)
          }
      }


    window.addEventListener("scroll",cambiarColor)
      return(
        <>
            <header className={color?"header header-color ":"header"}>

                <div>
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
                    <nav className="conteiner-elementos-menu" ref={boton}>

                        <ul className="menu">
                            <li className=" item-logo">
                                <img src={process.env.PUBLIC_URL + `imagenes/logo.png`} alt="" />
                            </li>                            
                            <li className="item">
                                {
                                    (informacion && informacion.length>=1)
                                    ?
                                    <Link to={informacion[0]["INICIO"][0].enlace} onClick={click}  className="link">{informacion[0]["INICIO"][0].nombre}</Link>
                                    :
                                    null
                                }
                            </li>
                            <li className="item" ref={boton_desplegar_submenu_nosotros}   >
                                <Link to="/nosotros"  onClick={click}  className="link">NOSOTROS </Link>
                                <MenuComponente variable={isActive.nosotros} data="nosotros"></MenuComponente>
                                <ul className="submenu" >
                                {
                                    (informacion && informacion.length>=1)
                                    ?
                                    informacion[1]["NOSOTROS"].map(c=>(
                                        <li className="item-submenu">
                                            {
                                            c.esDocumento==="SI"
                                            ?
                                            <a  href={process.env.PUBLIC_URL+ c.enlace} target="_blank" onClick={click}  rel="noopener noreferrer" className="link linkSubmenu">{c.nombre}</a>
                                            :
                                            <Link to={c.enlace} target={c.esExterno==="SI"?"_blank":null} onClick={click} className="link linkSubmenu">{c.nombre}</Link>
                                            }
                                        </li>
                                        ))
                                    :
                                    null
                                }
                                </ul>
                            </li>
                            <li className="item" ref={boton_desplegar_submenu_tramites}>
                                <Link to="/tramites"   className="link">TRAMITES</Link>
                                <MenuComponente variable={isActive.tramites} data="tramites"></MenuComponente>
                                <ul className="submenu">
                                {
                                    (informacion && informacion.length>=1)
                                    ?
                                    informacion[2]["TRAMITES"].map(c=>(
                                        <li className="item-submenu">
                                            {
                                            c.esDocumento==="SI"
                                            ?
                                            <a  href={process.env.PUBLIC_URL+ c.enlace} target="_blank" onClick={click}  rel="noopener noreferrer" className="link linkSubmenu">{c.nombre}</a>
                                            :
                                            <Link to={c.enlace} target={c.esExterno==="SI"?"_blank":null} onClick={click} className="link linkSubmenu">{c.nombre}</Link>
                                            }
                                        </li>
                                        ))
                                    :
                                    null
                                }
                                </ul>
                            </li>
                            <li className="item">
                                {
                                    (informacion && informacion.length>=1)
                                    ?
                                    <Link to={informacion[3]["SERVICIOS"][0].enlace} onClick={click}  className="link">{informacion[3]["SERVICIOS"][0].nombre}</Link>
                                    :
                                    null
                                }
                            </li>
                            <li className="item" ref={boton_desplegar_submenu_comunicaciones}>
                                <Link to="/comunicaciones"   className="link">COMUNICACIONES</Link>
                                <MenuComponente variable={isActive.comunicaciones} data="comunicaciones"></MenuComponente>


                                <ul className="submenu">
                                {
                                    (informacion && informacion.length>=1)
                                    ?
                                    informacion[4]["COMUNICACIONES"].map(c=>(
                                        <li className="item-submenu">
                                            {
                                            c.esDocumento==="SI"
                                            ?
                                            <a  href={process.env.PUBLIC_URL+ c.enlace} target="_blank" onClick={click}  rel="noopener noreferrer" className="link linkSubmenu">{c.nombre}</a>
                                            :
                                            <Link to={c.enlace} target={c.esExterno==="SI"?"_blank":null} onClick={click} className="link linkSubmenu">{c.nombre}</Link>
                                            }
                                        </li>
                                        ))
                                    :
                                    null
                                }
                                </ul>
                            </li>
                            <li className="item">
                               {
                                    (informacion && informacion.length>=1)
                                    ?
                                    <Link to={informacion[5]["CONVENIOS"][0].enlace} onClick={click}  className="link">{informacion[5]["CONVENIOS"][0].nombre}</Link>
                                    :
                                    null
                                }
                            </li>
                            <li className="item">
                            {
                                    (informacion && informacion.length>=1)
                                    ?
                                    <Link to={informacion[6]["EVENTOS"][0].enlace} onClick={click}  className="link">{informacion[6]["EVENTOS"][0].nombre}</Link>
                                    :
                                    null
                                }
                            </li>
                            <li className="item" ref={boton_desplegar_submenu_galeria}>
                              {
                                    (informacion && informacion.length>=1)
                                    ?
                                    <Link to={informacion[7]["GALERIA"][0].enlace} onClick={click}  className="link">{informacion[7]["GALERIA"][0].nombre}</Link>
                                    :
                                    null
                                }
                            </li>
                            <li className="item">
                            {
                                    (informacion && informacion.length>=1)
                                    ?
                                    <Link to={informacion[8]["BOLSA DE TRABAJO"][0].enlace} onClick={click}  className="link">{informacion[8]["BOLSA DE TRABAJO"][0].nombre}</Link>
                                    :
                                    null
                                }
                            </li>
                            <li className="item">
                              <div className='conteiner-toggle-cambio-tema'>
                                
                                <div className='switch-dark-mode'>
                                    <DarkModeSwitch
                                        style={{ marginRight: '2rem' }}
                                        checked={isDarkMode}
                                        onChange={toggleDarkMode}
                                        size={40}
                                        sunColor={'yellow'}
                                    />
                                </div>
                             </div>  
                            </li>
                        </ul>
                        
                    </nav>
                </div>
                
            </header>

        </>   
      )  
  }



  
  
  export default MenuItem;
  