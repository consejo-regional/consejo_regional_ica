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



import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";



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
           <Menu></Menu>
          <RedesSociales></RedesSociales>
          <MenuItem></MenuItem>
          < Routes>
            <Route path="/inicio" element={ <Home/>}></Route>

            <Route path="/nosotros" element={ <Biemvenida/>}></Route>
            <Route path="/nosotros/bienvenida" element={ <Biemvenida/>}></Route>
            <Route path="/nosotros/institucion" element={ <Institucion/>}></Route>
            <Route path="/nosotros/juntaDirectiva" element={ <JuntaDirectiva/>}></Route>
            <Route path="/nosotros/sociedadesCientificas" element={ <SociedadCientifica/>}></Route>
            <Route path="/nosotros/comite" element={ <Comite/>}></Route>


            <Route path="/tramites" element={ <ConstanciaHabilidad/>}></Route>
            <Route path="/tramites/constanciahabilidad" element={ <ConstanciaHabilidad/>}></Route>
            <Route path="/tramites/iniciarColegiatura" element={ <ConstanciaHabilidad/>}></Route>
            <Route path="/tramites/rectificacion" element={ <Rectificacion/>}></Route>
            <Route path="/tramites/actualizacionDatos" element={ <SericiosGrid/>}></Route>
            <Route path="/tramites/constanciaEtica" element={ <ConstanciaEtica/>}></Route>


            <Route path="/servicios" element={ <SericiosGrid/>}></Route>
            <Route path="/servicios/bolsaTrabajo" element={ <SericiosGrid/>}></Route>
            <Route path="/servicios/difusion" element={ <SericiosGrid/>}></Route>
            <Route path="/servicios/conoceAtuMedico" element={ <SericiosGrid/>}></Route>


            <Route path="/comunicaciones" element={ <SericiosGrid/>}></Route>
            <Route path="/eventos" element={ <SericiosGrid/>}></Route>
            <Route path="/beneficios" element={ <SericiosGrid/>}></Route>
            <Route path="/centroRecreaciones" element={ <SericiosGrid/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="*"  element={
                <div>
                <h1>Recurso no encontrado</h1>
                <span>pagina no encontrada</span>
                </div>
              }/>
          </Routes>
          <Footer></Footer>

         
         
        </Router>   
        }

        
        </>
      )  
  }
  
  
  export default App;
  