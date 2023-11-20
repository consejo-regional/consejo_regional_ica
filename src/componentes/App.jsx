import React, {useState,useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "../estilos/styles.scss"

import Home from './paginas/inicio/home'
import SericiosGrid from './paginas/servicios/serviciosGrid';

import RedesSociales from './componente/redes_sociales/redesSociales'
import MenuItem from '../componentes/componente/menu/menuItem'
import Footer from './componente/footer/footer'
import Loader from './componente/loader/loader'

import Biemvenida from './paginas/nosotros/biemvenida';
import Institucion from './paginas/nosotros/institucion'
import JuntaDirectiva from './paginas/nosotros/juntaDirectiva'
import SociedadCientifica from './paginas/nosotros/sociedadCientifica'
import Comite from './paginas/comites/comite'
import ConstanciaHabilidad from './paginas/tramites/constanciaHabilidad'
import Rectificacion from './paginas/tramites/rectificacion'
import ConstanciaEtica from './paginas/tramites/constanciaEtica'
import ColegioMedico from './paginas/nosotros/colegioMedico'
import QuienesSomos from './paginas/nosotros/quienesSomos';
import DocumentoNormativo from './paginas/nosotros/documentoNormativo';
import ConsejosDistritales from './paginas/nosotros/consejosDistritales';
import PastDecanos from './paginas/nosotros/pastDecanos';
import OpinionPronunciamiento from './paginas/comunicaciones/OpinionPronunciamiento';
import Condolencias from './paginas/comunicaciones/condolencias';
import GaleriaFotos from './paginas/galeria/galeriaFotos';
import GaleriaVideos from './paginas/galeria/galeriaVideos';
import Anuncios from './componente/pronunciamiento_inicio/anuncios';
import SitioConstruccion from './componente/sitio_construccion/sitioConstruccion';
import NoEncontrado from './componente/404/noEncontrado'


import Noticias from './paginas/comunicaciones/noticiasPage';
import ComunicacionesDetalle from './paginas/comunicaciones/noticiasDetalle';
import EventoDetalle from './paginas/eventos/eventoDetalle';
import EventosPage from './paginas/eventos/eventosPage';
import TramitesGrid from './paginas/tramites/tramitesGrid';
import Watsap from './componente/redes_sociales/watsap';
import Biblioteca from './paginas/biblioteca/biblioteca';
import Efemerides from './paginas/comunicaciones/efemeridesPage';
import Normativo from './paginas/comunicaciones/normativo';
import EfemeridesDetalle from './paginas/comunicaciones/efemeridesDetalles';
import BolsaTrabajo from './paginas/bolsa_trabajo/bolsaPage';
import BolsaDetalle from './paginas/bolsa_trabajo/bolsaDetalle';


const App = ()=> {

  const[loader,setLoader]=useState(false)
  const[scrollTop,setScrollTop] =useState(0)
  
  const onScroll=()=>{
    const winScroll = document.documentElement.scrollTop
    const height =document.documentElement.scrollHeight -document.documentElement.clientHeight
    const scrolled =(winScroll/height) * 100
    setScrollTop(scrolled)
  }
  useEffect(()=>{
    AOS.init({duration: 2000})
    setTimeout(()=>{
      setLoader(true)
    },1200)
    //evento de scroll
    window.addEventListener("scroll",onScroll)
    return () => window.removeEventListener("scroll",onScroll)
  },[])

      return(
        <>
        {
          !loader ? <Loader></Loader>
          :
          <Router>
          <div className="progressMainWrapper">
            <div 
              className="progressMainStyle"
              style={{width:`${scrollTop}%`}}
            ></div>
          </div>
           <Anuncios></Anuncios>
           {/* <Menu></Menu> */}
           <RedesSociales></RedesSociales>
           <Watsap></Watsap>
           <MenuItem></MenuItem>
         
          < Routes>
            <Route path="/inicio" element={ <Home/>}></Route>

            <Route path="/nosotros" element={ <Biemvenida/>}></Route>
            <Route path="/nosotros/bienvenida" element={ <Biemvenida/>}></Route>
            <Route path="/nosotros/colegiomedico" element={ <ColegioMedico/>}></Route>
            <Route path="/nosotros/quienesSomos" element={ <QuienesSomos/>}></Route>
            <Route path="/nosotros/documentoNormativo" element={ <DocumentoNormativo/>}></Route>
            <Route path="/nosotros/consejosDistritales" element={ <ConsejosDistritales/>}></Route>
            <Route path="/nosotros/pastDecanos" element={ <PastDecanos/>}></Route>

            <Route path="/nosotros/institucion" element={ <Institucion/>}></Route>
            <Route path="/nosotros/juntaDirectiva" element={ <JuntaDirectiva/>}></Route>
            <Route path="/nosotros/sociedadesCientificas" element={ <SociedadCientifica/>}></Route>



            <Route path="/tramites" element={ <TramitesGrid></TramitesGrid>}></Route>
            <Route path="/tramites/constanciahabilidad" element={ <ConstanciaHabilidad/>}></Route>
            <Route path="/tramites/rectificacion" element={ <Rectificacion/>}></Route>
            <Route path="/tramites/constanciaEtica" element={ <ConstanciaEtica/>}></Route>


            <Route path="/servicios" element={ <SericiosGrid/>}></Route>
            <Route path="/servicios/bolsaTrabajo" element={ <SericiosGrid/>}></Route>
            <Route path="/servicios/difusion" element={ <SericiosGrid/>}></Route>
            <Route path="/servicios/conoceAtuMedico" element={ <SericiosGrid/>}></Route>


            <Route path="/comunicaciones" element={ <Noticias/>}></Route>
            <Route path="/noticias/:id" element={ <ComunicacionesDetalle/>}></Route>
            <Route path="/comunicaciones/noticias" element={ <Noticias/>}></Route>
            <Route path="/comunicaciones/efemerides/:id" element={ <EfemeridesDetalle></EfemeridesDetalle>}></Route>
            <Route path="/comunicaciones/efemerides" element={ <Efemerides></Efemerides>}></Route>
            <Route path="/comunicaciones/pronunciamiento" element={ <OpinionPronunciamiento/>}></Route>
            <Route path="/comunicaciones/normativo" element={ <Normativo></Normativo>}></Route>
            <Route path="/comunicaciones/condolencias" element={ <Condolencias/>}></Route>


            <Route path="/comite" element={ <Comite/>}></Route>

            <Route path="/eventos" element={ <EventosPage/>}></Route>
            <Route path="/eventos/:id" element={ <EventoDetalle/>}></Route>
            
            <Route path="/beneficios" element={ <SitioConstruccion/>}></Route>
            <Route path="/centroRecreaciones" element={ <SitioConstruccion/>}></Route>

            <Route path="/biblioteca" element={ <Biblioteca></Biblioteca>}></Route>

            <Route path="/galeriafotos" element={<GaleriaFotos></GaleriaFotos>}></Route>
            <Route path="/galeriavideos" element={ <GaleriaVideos></GaleriaVideos>}></Route>

            <Route path="/bolsatrabajo" element={ <BolsaTrabajo></BolsaTrabajo>}></Route>
            <Route path="/bolsatrabajo/:id" element={ <BolsaDetalle></BolsaDetalle>}></Route>


            <Route path="/" element={<Home/>}></Route>
            <Route path="*"  element={
                <NoEncontrado/>
              }/>
          </Routes>

          <Footer></Footer>

        </Router>   
        }
        </>
      )  
  }
  
  
  export default App;
  