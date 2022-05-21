

import imagen1 from '../assets/imagenes/eventos/IMAGE-1.png'
import imagen2 from '../assets/imagenes/eventos/CARDIOLOGIA.png'
import imagen21 from '../assets/imagenes/eventos/CARDIOLOGIA1.png'

import imagen3 from '../assets/imagenes/eventos/LA BIOETICA Y EL CASO TUSKEE.png'
import imagen31 from '../assets/imagenes/eventos/LA BIOETICA Y EL CASO TUSKEE1.png'


import imagen4 from '../assets/imagenes/eventos/Group 32.png'
import imagen41 from '../assets/imagenes/eventos/Group 321.png'


import imagen5 from '../assets/imagenes/eventos/EVENTO1.png'


import imagen6 from '../assets/imagenes/noticias/OZONOTERAPIA (1).png'
import imagen61 from '../assets/imagenes/eventos/OZONOTERAPIA1.png'



const Eventos=[
    {
        id:"1",
        imagen:imagen6,
        imgenDetalle:imagen61,
        description:"ozonoterapia en medicina",
        contenido:"",
        //fecha:"2002/05/13; 2002/05/20  ;2002/05/13 ",
        fecha:" ",
        tipo:"EVENTO",
        estado:'CERRADO',
      },{
        id:"2",
        imagen:imagen2,
        imgenDetalle:imagen21,
        description:"Modulo Cardiologia",
        contenido:"",
       // fecha:"2022/05/13; 2022/05/20  ;2022/05/13 ",
        fecha:" ",
        tipo:"EVENTO",
        estado:'VIGENTE',
      },{
        id:"3",
        imagen:imagen3,
        imgenDetalle:imagen31,
        contenido:"",
        description:"Teleconferencia Bioetica y el caso Tuskegee",
        //fecha:"2021/04/29",
        fecha:"",
        tipo:"EVENTO",
        estado:'CERRADO',
      },{
        id:"4",
        imagen:imagen4,
        imgenDetalle:imagen41,
        description:"Seminario Busqueda Eficiencia de Informacion Cientifica en Medicina",
        contenido:"",
       // fecha:"2015/04/22",
        fecha:"",
        tipo:"EVENTO",
        estado:'CERRADO',
      }
    
]
  

export default Eventos
  
  