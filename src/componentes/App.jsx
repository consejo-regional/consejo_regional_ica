import React, {useState,useEffect} from 'react'
import Home from './paginas/home'
import SericiosGrid from './paginas/serviciosGrid';

import "../estilos/styles.scss"

import RedesSociales from '../componentes/moleculas/menu/redesSociales'
import MenuItem from '../componentes/moleculas/menu/menuItem'
import Menu from '../componentes/moleculas/menu/menu'
import Footer from '../componentes/moleculas/footer'
import Loader from '../componentes/moleculas/loader'


import Biemvenida from './paginas/biemvenida';
import Institucion from './paginas/institucion'
import JuntaDirectiva from './paginas/juntaDirectiva'
import SociedadCientifica from './paginas/sociedadCientifica'
import Comite from './paginas/comite'
import ConstanciaHabilidad from './paginas/constanciaHabilidad'
import Rectificacion from './paginas/rectificacion'
import ConstanciaEtica from './paginas/constanciaEtica'
import ColegioMedico from './paginas/colegioMedico'
import QuienesSomos from './paginas/quienesSomos';
import DocumentoNormativo from './paginas/documentoNormativo';
import ConsejosDistritales from './paginas/consejosDistritales';
import PastDecanos from './paginas/pastDecanos';
import OpinionPronunciamiento from './paginas/OpinionPronunciamiento';
import Condolencias from './paginas/OpinionPronunciamiento';



import Anuncios from './moleculas/anuncios';
import SitioConstruccion from './moleculas/sitioConstruccion';
import NoEncontrado from './moleculas/noEncontrado'



import {
  HashRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import Comunicaciones from './paginas/noticiasPage';
import ComunicacionesDetalle from './moleculas/noticiasDetalle';
import EventoDetalle from '../componentes/moleculas/eventoDetalle';
import EventosPage from './paginas/eventosPage';
import TramitesGrid from './paginas/tramitesGrid';
import Watsap from './moleculas/watsap';
import Biblioteca from './paginas/biblioteca';
import Efemerides from './paginas/efemeridesPage';
import Normativo from './moleculas/normativo';
//import CmpDiguital from './moleculas/cmpDiguital';

import AOS from "aos";
import "aos/dist/aos.css";

const App = ()=> {

  const[loader,setLoader]=useState(false)

  useEffect(()=>{
    AOS.init({duration: 2000})
    setTimeout(()=>{
      setLoader(true)
      console.log("loader")
    },1000)
  },[])

      return(
        <>
        {
          !loader ? <Loader></Loader>
          
          :
          <Router>
           <Anuncios></Anuncios>
           <Menu></Menu>
          <RedesSociales></RedesSociales>
          <Watsap></Watsap>
          {/* <CmpDiguital></CmpDiguital> */}
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
            <Route path="/nosotros/comite" element={ <Comite/>}></Route>


            <Route path="/tramites" element={ <TramitesGrid></TramitesGrid>}></Route>
            <Route path="/tramites/constanciahabilidad" element={ <ConstanciaHabilidad/>}></Route>
            <Route path="/tramites/iniciarColegiatura" element={ <ConstanciaHabilidad/>}></Route>
            <Route path="/tramites/rectificacion" element={ <Rectificacion/>}></Route>
            <Route path="/tramites/actualizacionDatos" element={ <SericiosGrid/>}></Route>
            <Route path="/tramites/constanciaEtica" element={ <ConstanciaEtica/>}></Route>


            <Route path="/servicios" element={ <SericiosGrid/>}></Route>
            <Route path="/servicios/bolsaTrabajo" element={ <SericiosGrid/>}></Route>
            <Route path="/servicios/difusion" element={ <SericiosGrid/>}></Route>
            <Route path="/servicios/conoceAtuMedico" element={ <SericiosGrid/>}></Route>


            <Route path="/comunicaciones" element={ <Comunicaciones/>}></Route>
            <Route path="/noticias/:id" element={ <ComunicacionesDetalle/>}></Route>
            <Route path="/comunicaciones/noticias" element={ <Comunicaciones/>}></Route>
            <Route path="/efemerides/:id" element={ <ComunicacionesDetalle/>}></Route>
            <Route path="/comunicaciones/efemerides" element={ <Efemerides></Efemerides>}></Route>
            <Route path="/comunicaciones/pronunciamiento" element={ <OpinionPronunciamiento/>}></Route>
            <Route path="/comunicaciones/normativo" element={ <Normativo></Normativo>}></Route>
            <Route path="/comunicaciones/condolencias" element={ <Condolencias/>}></Route>




            
            <Route path="/eventos" element={ <EventosPage/>}></Route>
            <Route path="/eventos/:id" element={ <EventoDetalle/>}></Route>
            
            <Route path="/beneficios" element={ <SitioConstruccion/>}></Route>
            <Route path="/centroRecreaciones" element={ <SitioConstruccion/>}></Route>

            <Route path="/biblioteca" element={ <Biblioteca></Biblioteca>}></Route>



            <Route path="/" element={<Home/>}></Route>
            <Route path="*"  element={
                <NoEncontrado/>
              }/>
          </Routes>
          <div data-aos="fade-up">

            <Footer></Footer>

          </div>


         
         
        </Router>   
        }

        
        </>
      )  
  }
  
  
  export default App;
  