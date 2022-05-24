import React, {useState,useEffect} from 'react'
import Home from './paginas/home'
import SericiosGrid from './moleculas/serviciosGrid';

import "../estilos/styles.scss"

import RedesSociales from '../componentes/moleculas/redesSociales'
import MenuItem from '../componentes/moleculas/menuItem'
import Menu from '../componentes/moleculas/menu'
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
import ColegioMedico from '../componentes/moleculas/colegioMedico'
import QuienesSomos from '../componentes/moleculas/quienesSomos';
import DocumentoNormativo from '../componentes/moleculas/documentoNormativo';
import ConsejosDistritales from '../componentes/moleculas/consejosDistritales';
import PastDecanos from '../componentes/moleculas/pastDecanos';
import Pronunciamiento from '../componentes/moleculas/pronunciamiento';



import Anuncios from './moleculas/anuncios';
import SitioConstruccion from './moleculas/sitioConstruccion';
import NoEncontrado from './moleculas/noEncontrado'



import {
  HashRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import Comunicaciones from './paginas/comunicaciones';
import ComunicacionesDetalle from '../componentes/moleculas/comunicacionesDetalle';
import EventoDetalle from '../componentes/moleculas/eventoDetalle';
import ComunicacionesNoticia from './paginas/comunicacionesNoticia';
import EventosPage from './paginas/eventosPage';
import Eventos from './moleculas/eventos';
import TramitesGrid from './moleculas/tramitesGrid';
import Watsap from './moleculas/watsap';



const App = ()=> {

  const[loader,setLoader]=useState(false)

  useEffect(()=>{
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
            <Route path="/comunicaciones/:id" element={ <ComunicacionesDetalle/>}></Route>
            <Route path="/comunicaciones/noticias" element={ <ComunicacionesNoticia/>}></Route>
            <Route path="/comunicaciones/pronunciamiento" element={ <Pronunciamiento/>}></Route>
            
            <Route path="/eventos" element={ <EventosPage/>}></Route>
            <Route path="/eventos/:id" element={ <EventoDetalle/>}></Route>
            
            <Route path="/beneficios" element={ <SitioConstruccion/>}></Route>
            <Route path="/centroRecreaciones" element={ <SitioConstruccion/>}></Route>
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
  