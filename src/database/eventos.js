
const Eventos=[
    {
        id:"1",
        imagen:process.env.PUBLIC_URL + `/imagenes/noticias/OZONOTERAPIA (1).png`,
        imgenDetalle:process.env.PUBLIC_URL + `/imagenes/eventos/OZONOTERAPIA1.png`,
        description:"ozonoterapia en medicina",
        contenido:"",
        //fecha:"2002/05/13; 2002/05/20  ;2002/05/13 ",
        fecha:" ",
        tipo:"EVENTO",
        estado:'CERRADO',
      },{
        id:"2",
        imagen:process.env.PUBLIC_URL+`/imagenes/eventos/CARDIOLOGIA.png`,
        imgenDetalle:process.env.PUBLIC_URL+`/imagenes/eventos/CARDIOLOGIA1.png`,
        description:"Modulo Cardiologia",
        contenido:"",
       // fecha:"2022/05/13; 2022/05/20  ;2022/05/13 ",
        fecha:" ",
        tipo:"EVENTO",
        estado:'VIGENTE',
      },{
        id:"3",
        imagen:process.env.PUBLIC_URL+`/imagenes/eventos/LA BIOETICA Y EL CASO TUSKEE.png`,
        imgenDetalle:process.env.PUBLIC_URL+`/imagenes/eventos/LA BIOETICA Y EL CASO TUSKEE1.png`,
        contenido:"",
        description:"Teleconferencia Bioetica y el caso Tuskegee",
        //fecha:"2021/04/29",
        fecha:"",
        tipo:"EVENTO",
        estado:'CERRADO',
      },{
        id:"4",
        imagen:process.env.PUBLIC_URL+`/imagenes/eventos/Group 32.png`,
        imgenDetalle:process.env.PUBLIC_URL+`/imagenes/eventos/Group 321.png`,
        description:"Seminario Busqueda Eficiencia de Informacion Cientifica en Medicina",
        contenido:"",
       // fecha:"2015/04/22",
        fecha:"",
        tipo:"EVENTO",
        estado:'CERRADO',
      }
    
]
  

export default Eventos
  
  