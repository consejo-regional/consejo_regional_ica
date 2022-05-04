import React from 'react'
import Home from './paginas/home'
import SericiosGrid from './moleculas/serviciosGrid';


import "../estilos/styles.scss"


import RedesSociales from '../componentes/moleculas/redesSociales'
import MenuItem from '../componentes/moleculas/menuItem'
import Menu from '../componentes/moleculas/menu'
import Biemvenida from './paginas/biemvenida';
import Institucion from './paginas/institucion'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";



const App = ()=> {
      return(
        <Router>
           <Menu></Menu>
          <RedesSociales></RedesSociales>
          <MenuItem></MenuItem>
          < Routes>
            <Route path="/inicio" element={ <Home/>}></Route>

            <Route path="/nosotros" element={ <Biemvenida/>}></Route>
            <Route path="/nosotros/bienvenida" element={ <Biemvenida/>}></Route>
            <Route path="/nosotros/institucion" element={ <Institucion/>}></Route>
            <Route path="/nosotros/juntaDirectiva" element={ <Biemvenida/>}></Route>
            <Route path="/nosotros/sociedadesCientificas" element={ <Biemvenida/>}></Route>
            <Route path="/nosotros/comite" element={ <Biemvenida/>}></Route>


            <Route path="/tramites" element={ <SericiosGrid/>}></Route>
            <Route path="/servicios" element={ <SericiosGrid/>}></Route>
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

         
         
        </Router>   
      )  
  }
  
  
  export default App;
  