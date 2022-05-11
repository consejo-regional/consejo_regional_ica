import React from 'react'
import Cart from '../moleculas/cart';


import hombre from '../../assets/imagenes/hombre.png'
import mujer from '../../assets/imagenes/mujer.png'

const comitesArray=[
    {
        titulo:"COMITÉ DE VIGILANCIA ÉTICA Y DEONTOLOGÍA",
        presidente:"DR. AUDIAS JOSUE PEREZ AGUIRRE	",
        miembro1:{
            nombre:"DRA. MARIA DEL CARMEN VARGAS GARCIA",
            foto:mujer
        },
        miembro2:{
            nombre:"DR. CARLOS HUGO GUERRERO CHACALTANA",
            foto:hombre
        },
        miembro3:{
            nombre:"DR. ADRIAN RODOLFO PALOMINO HERENCIA",
            foto:hombre
        },
    },
    {
        titulo:"COMITÉ DE ASUNTOS CONTENCIOSOS Y PROCEDIMIENTOS DISCIPLINARIOS",
        presidente:"DRA. FLOR DE MARÍA MEJÍA ESCATE	",
        miembro1:{
            nombre:"DRA. TERESA DE LOS MILAGROS ANDRADE SOTIL",
            foto:mujer
        },
        miembro2:{
            nombre:"DR. JONY HUBER HUARIPAUCAR MISAICO",
            foto:hombre
        },
        miembro3:{
            nombre:"DR. RAÚL SANTA MARIA RÍOS",
            foto:hombre
        },
    },
    {
        titulo:"COMITÉ DE EVENTOS CIENTÍFICOS E INFORMES TÉCNICOS",
        presidente:"DR. ALEXANDER HUMBERTO PECHO PECHE",
        miembro1:{
            nombre:"DR. ROGGER ANTONIO ABREGU AGUADO",
            foto:hombre
        },
        miembro2:{
            nombre:"DR. LUIS GIANCARLO SARAVIA HUARCA",
            foto:hombre
        },
        miembro3:{
            nombre:"DR. MANUEL JOSE JHONG CASTRO",
            foto:hombre
        },
    },
    {
        titulo:"COMITÉ DE INVESTIGACIÓN E INNOVACIÓN",
        presidente:"DR. LUÍS CARLOS OLIVERA RAMOS ",
        miembro1:{
            nombre:"DR. PATRICIA CAROLINA HUAMAN OROSCO",
            foto:mujer
        },
        miembro2:{
            nombre:"DR. JAVIER EDUARDO URIBE GODOY ",
            foto:hombre
        },
        miembro3:{
            nombre:"DR. JESUS ANDREE NEYRA LEÓN",
            foto:hombre
        },
        miembro4:{
            nombre:"CANDY MILAGROS CORNEJO CHACALTANA",
            foto:mujer
        },
        miembro5:{
            nombre:"DR. CARLOS ALBERTO DÁVILA HERNANDEZ",
            foto:hombre
        },
        miembro6:{
            nombre:"DRA. GIANNY DENISSE GALAGARZA GUTIÉRREZ",
            foto:mujer
        },
        miembro7:{
            nombre:"DR. JAVIER ALFREDO GRADOS TELLO",
            foto:hombre
        },
        miembro8:{
            nombre:"DR. LUIS GIANCARLO SARAVIA HUARCA",
            foto:hombre
        },
        miembro9:{
            nombre:"DR. JOHN ALBERTO PALOMINO MONTEROLA ",
            foto:hombre
        },
        miembro10:{
            nombre:"DR. JUAN CARLOS DÍAZ MONGE",
            foto:hombre
        },
        miembro11:{
            nombre:"DR. CARLOS ANDRÉS CARRASCO FARFAN ",
            foto:hombre
        },
        miembro12:{
            nombre:"ATOCHE MENDOZA JOSE ALEXANDER",
            foto:hombre
        },
        miembro13:{
            nombre:"VIVANCO RAMOS LUIS GUILLERMO VLADIMIR",
            foto:hombre
        },
        miembro14:{
            nombre:"YAURI GARAVITO DIANA",
            foto:hombre
        }
    },
    {
        titulo:"COMITÉ DE LUCHA CONTRA EL EJERCICIO ILEGAL DE LA MEDICINA",
        presidente:"DR. ALEX ALBERTO GUIBOVICH MESINAS	",
        miembro1:{
            nombre:"DRA. FRANCESCA ALICE DUARTE PORTUGAL	",
            foto:mujer
        },
        miembro2:{
            nombre:"DR. ALAN MARCO CHAVESTA CUSTODIO",
            foto:hombre
        },
        miembro3:{
            nombre:"DR. MARCO ANTONIO GUERRERO ANGULO",
            foto:hombre
        },
    }
    ,
    {
        titulo:"COMITÉ EDUCACIÓN MÉDICA CONTINUA",
        presidente:"DR. ALEXANDER HUMBERTO PECHO PECHE	",
        miembro1:{
            nombre:"DRA. JULIANA MARIA APARCANA MACHADO	",
            foto:mujer
        },
        miembro2:{
            nombre:"DR. ROGGER ANTONIO ABREGU AGUADO",
            foto:hombre
        },
        miembro3:{
            nombre:"DR. LUIS GIANCARLO SARAVIA HUARCA",
            foto:hombre
        },
        miembro4:{
            nombre:"DR. MANUEL JOSE JHONG CASTROA",
            foto:hombre
        },
        miembro5:{
            nombre:"DR. FRANCO EDGARD MIO PALACIOS",
            foto:hombre
        },
    }
    ,
    {
        titulo:"COMITÉ DE MEDICINA TRADICIONAL, ALTERNATIVA Y COMPLEMENTARIA",
        presidente:"DRA. JUANA MARÍA VEGA CARLOS	",
        miembro1:{
            nombre:"DRA. ZOILA AURORA LENGUA KUAN	",
            foto:mujer
        },
        miembro2:{
            nombre:"DRA. PETRONILA AURORA CASTRO ROJO",
            foto:mujer
        },
        miembro3:{
            nombre:"DRA. NIEVES ETHEL MORALES MEZA ",
            foto:mujer
        },
        miembro4:{
            nombre:"DR. PEDRO CESAR ARANZABAL NAVARRETE",
            foto:hombre
        }
    }
    ,
    {
        titulo:"COMITÉ DE DEPORTES",
        presidente:"DR. FELIX ENRIQUE MARTINEZ PAUCAR ",
        miembro1:{
            nombre:"DR. CRISTHIAN RAUL PALACIOS NEYRA",
            foto:mujer
        },
        miembro2:{
            nombre:"DRA. SONIA CHOQUE GUTIERREZ",
            foto:mujer
        },
        miembro3:{
            nombre:"DRA. JULIANA MARIA APARCANA MACHADO ",
            foto:mujer
        },
        miembro4:{
            nombre:"DR. JESUS ROBERTO CASTILLO HUASASQUICHE ",
            foto:hombre
        },
        miembro5:{
            nombre:"DR. ANDRES GUIDO BENDEZU MARTINEZ",
            foto:hombre
        },
        miembro6:{
            nombre:"DR. PEDRO PABLO ZEVALLOS TORRES",
            foto:hombre
        },
        miembro7:{
            nombre:"DR. VICTOR PERCY DE LA CRUZ TORREALVA",
            foto:hombre
        },
        miembro8:{
            nombre:"DR. SANDRO JAVIER MUÑOZ BENDEZU ",
            foto:hombre
        },
        miembro9:{
            nombre:"DR. FRANCO FAJARDO HAROLD CHRISTIAN ",
            foto:hombre
        },
        miembro10:{
            nombre:"DR. MIJAIL VLADIMIR LLONA GARCIA",
            foto:hombre
        },
        miembro11:{
            nombre:"DRA. EDITH PAREJA MALDONADO ",
            foto:mujer
        },
        miembro12:{
            nombre:"DRA. CECILIA PARDO ALEJO",
            foto:mujer
        }
    } ,
    {
        titulo:"COMITÉ DE SALUD PÚBLICA",
        presidente:"DR. LUIS FELIPE MUÑANTE APARCANA",
        miembro1:{
            nombre:"DR. RICARDO MIGUEL CABRERA CASTILLO",
            foto:mujer
        },
        miembro2:{
            nombre:"DR. JOSE DANIEL HERNÁNDEZ ZÚÑIGA",
            foto:mujer
        },
        miembro3:{
            nombre:"DR. ROLANDO MANUEL ANICAMA ZAPATA ",
            foto:mujer
        },
        miembro4:{
            nombre:"DRA. LITA SILVIA DEL RIO MUÑIZ",
            foto:hombre
        },
        miembro5:{
            nombre:"DR. RÓMULO DANIEL CAHUA VALDIVIESO",
            foto:hombre
        },
        miembro6:{
            nombre:"DR. JUAN ALBERTO BORJAS LENGUA",
            foto:hombre
        },
        miembro7:{
            nombre:"DR. MARCOS RUPERTO CABRERA PIMENTEL",
            foto:hombre
        },
        miembro8:{
            nombre:"DR. JORGE ENRRIQUE TORRES MELGAR",
            foto:hombre
        }
    },
    {
        titulo:"COMITÉ DE ECONOMÍA",
        presidente:"DRA. FLOR ELIZABETH AVILES BONIFAZ",
        miembro1:{
            nombre:"DRA. YEIMING MARTINELLY ROJAS VENTURA ",
            foto:hombre
        },
        miembro2:{
            nombre:"DR. WALTER MILTON FUENTES TANG",
            foto:hombre
        },
        miembro3:{
            nombre:"DR. JESÚS GABRIEL TOVAR HINOSTROZA",
            foto:hombre
        },
    }
]




const Comite = ()=> {

    var contenido = {
        titulo: 'COMITÉS',
        descripccion: ''
    }
      return(
        
        <>
        <div className="datos">
        <h2>{contenido.titulo}</h2>
        <div className="conteiner-datos">
            <h4 className="contenido_cart_descripccion">{contenido.descripccion}</h4> 
            <h2>COMITÉ DE VIGILANCIA ÉTICA Y DEONTOLÓGICA </h2>
            <h4 className="contenido_cart_descripccion">El Comité de Vigilancia Ética y Deontológica (CVED) del Consejo Regional IX -ICa, tiene como función difundir y vigilar el cumplimiento de las disposiciones de Ley, Estatuto, Reglamento, Código de Ética y Deontología, y/o cualquier acuerdo que emane del Consejo Nacional o CRIX-Ica. (Art. 72.1° del Reglamento del Colegio Médico del Perú).

            El Art. 72.° del Reglamento del CMP, describe las actividades a cargo del CVED.
            El Código de Ética y Deontología del Colegio Médico del Perú, establece los deberes, derechos y valores que debe tomar en consideración cada médico al momento de ejercer sus funciones en los servicios de atención de salud, administración y gestión de los mismos. Este conjunto de principios y reglas también establece parámetros para la educación de los futuros médicos, la investigación científica, el manejo documentario y las relaciones institucionales.

            El Código de Ética y Deontología del Colegio Médico del Perú, establece los deberes, derechos y valores que debe tomar en consideración cada médico al momento de ejercer sus funciones en los servicios de atención de salud, administración y gestión de los mismos. Este conjunto de principios y reglas también establece parámetros para la educación de los futuros médicos, la investigación científica, el manejo documentario y las relaciones institucionales.
            </h4> 
            <h2>FUNCIONES DEL CVED </h2>
            <h4 className="contenido_cart_descripccion">Art. 72.º del Reglamento del CMP. DEL COMITÉ DE VIGILANCIA ÉTICA Y DEONTOLÓGICA</h4> 
            <h4 className="contenido_cart_descripccion">Corresponde al Comité de Vigilancia Ética y Deontológica:</h4> 
            <h4 className="contenido_cart_descripccion">72.1. Difundir y vigilar el cumplimiento de las disposiciones de la Ley, Estatuto, Reglamento, Código de Ética y Deontología, su reglamento y cualquier norma o acuerdo emanado del Consejo Nacional o Consejos Regionales en su caso.</h4> 
            <h4 className="contenido_cart_descripccion">72.2. Solicitar previo acuerdo al Consejo Regional, abrir procedimiento ético disciplinario a cualquier miembro de la orden por la violación o incumplimiento del Estatuto, Reglamentos, Código de Ética y Deontología, o cualquier norma o acuerdo emanado del Consejo Nacional o Consejo Regional en su caso</h4> 
            <h4 className="contenido_cart_descripccion">72.3. Denunciar, previo acuerdo, ante el Consejo Nacional a cualquiera de los miembros de dicho organismo colegiado por la violación o incumplimiento del Estatuto, Reglamentos, Código de Ética y Deontología o cualquier norma o acuerdo emanado del Consejo Nacional o Consejo Regional en su caso.</h4> 
            <h4 className="contenido_cart_descripccion">72.4. Solicitar previo acuerdo, ante el Consejo Nacional, abrir procedimiento ético disciplinario a los miembros de los Consejos Regionales que corporativamente hayan violado o incumplido del Estatuto, Reglamentos, Código de Ética y Deontología o cualquier norma o acuerdo emanado del Consejo Nacional o Consejo Regional en su caso.</h4> 
            <h4 className="contenido_cart_descripccion">72.5. Defender el prestigio profesional, cuando la profesión o los médicos, individual o colectivamente, sean objeto de agravio</h4> 
            <h4 className="contenido_cart_descripccion">72.6. Denunciar ante el Consejo Nacional cuando en las actividades de las instituciones médicas, científicas, asistenciales u otras relacionadas con la medicina, se incurra en transgresiones a las normas éticas y deontológicas.</h4> 
            <h4 className="contenido_cart_descripccion">72.7. Vigilar, en coordinación con los Consejos Regionales que el aviso profesional no se aparte de las normas que el Colegio establezca al respecto</h4> 
            <h4 className="contenido_cart_descripccion">72.8. Absolver las consultas sobre asuntos de ética y deontología profesional que en vía de apelación, sean puestas en su conocimiento por el Consejo Nacional o los Consejos Regionales soliciten en su caso, vía su propio Comité de Vigilancia Ética y Deontológica.</h4> 
            <h4 className="contenido_cart_descripccion">72.9. Coordinar con los Consejos Regionales la difusión y conocimiento del Código de Ética, así como de los principios bioéticos y deontológicos.</h4> 
            <h4 className="contenido_cart_descripccion">72.10. Cumplir con los encargos del Comité Ejecutivo y del Consejo Nacional.</h4> 
            <h4 className="contenido_cart_descripccion"></h4> 
            
            <div className="contenido-izquierda">
                <Cart></Cart>
            </div>

            {
                comitesArray.map(c=>(
                    <div className="datos">
                    <div className="contenedor-evento-titulo">   
                        <h2 >{c.titulo}</h2>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="contenedor_servicios_grid">
                        <SericiosItem imagen={hombre} nombre={c.presidente} description="PRESIDENTE"></SericiosItem>

                       {c.miembro1? 
                        <SericiosItem imagen={c.miembro1.foto} nombre={c.miembro1.nombre} description="MIEMBRO"></SericiosItem>
                       :null
                       }
                       {c.miembro2? 
                        <SericiosItem imagen={c.miembro2.foto} nombre={c.miembro2.nombre} description="MIEMBRO"></SericiosItem>
                       :null
                       }
                       {c.miembro3? 
                        <SericiosItem imagen={c.miembro3.foto} nombre={c.miembro3.nombre} description="MIEMBRO"></SericiosItem>
                       :null
                       }
                       {c.miembro4? 
                        <SericiosItem imagen={c.miembro4.foto} nombre={c.miembro4.nombre} description="MIEMBRO"></SericiosItem>
                       :null
                       }
                       {c.miembro5? 
                        <SericiosItem imagen={c.miembro5.foto} nombre={c.miembro5.nombre} description="MIEMBRO"></SericiosItem>
                       :null
                       }
                       {c.miembro6? 
                        <SericiosItem imagen={c.miembro6.foto} nombre={c.miembro6.nombre} description="MIEMBRO"></SericiosItem>
                       :null
                       }
                       {c.miembro7? 
                        <SericiosItem imagen={c.miembro7.foto} nombre={c.miembro7.nombre} description="MIEMBRO"></SericiosItem>
                       :null
                       }
                       {c.miembro8? 
                        <SericiosItem imagen={c.miembro8.foto} nombre={c.miembro8.nombre} description="MIEMBRO"></SericiosItem>
                       :null
                       }
                       {c.miembro9? 
                        <SericiosItem imagen={c.miembro9.foto} nombre={c.miembro9.nombre} description="MIEMBRO"></SericiosItem>
                       :null
                       }
                       {c.miembro10? 
                        <SericiosItem imagen={c.miembro10.foto} nombre={c.miembro10.nombre} description="MIEMBRO"></SericiosItem>
                       :null
                       }
                       {c.miembro11? 
                        <SericiosItem imagen={c.miembro11.foto} nombre={c.miembro11.nombre} description="MIEMBRO"></SericiosItem>
                       :null
                       }
                       {c.miembro12? 
                        <SericiosItem imagen={c.miembro12.foto} nombre={c.miembro12.nombre} description="MIEMBRO"></SericiosItem>
                       :null
                       }
                       {c.miembro13? 
                        <SericiosItem imagen={c.miembro13.foto} nombre={c.miembro13.nombre} description="MIEMBRO"></SericiosItem>
                       :null
                       }
                       {c.miembro14? 
                        <SericiosItem imagen={c.miembro14.foto} nombre={c.miembro14.nombre} description="MIEMBRO"></SericiosItem>
                       :null
                       }
                       

                        
                    </div>
                </div>

                ))
            }

        </div>
        </div>
        
        </>   
      )  
  }

  const SericiosItem = ({imagen,nombre,description})=> {
    return(
      <>
      <div className="contenedor_servicios_item">
        <img className="servicios imagen" src={imagen} alt={imagen}></img>
        <div className="servicios-nombre">{nombre}</div>
        <div className="servicios-description">{description}</div>
      </div>
      </>   
    )  
}




  
  
  export default Comite;