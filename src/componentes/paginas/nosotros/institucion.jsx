import React from 'react'
//import Cart from '../moleculas/cart';


const Institucion = ()=> {

    var contenido = {
        titulo: 'INSTITUCIÓN',
        descripccion: 'El Colegio Médico del Perú (CMP) es una institución autónoma de derecho público interno, conformado por organismos democráticamente constituidos y representativo de la profesión médica en todo el territorio de la República. Surgió de esfuerzos organizativos gremiales y profesionales y se institucionalizó el 16 de octubre de 1964, al ser creado mediante Ley Nº 15173; modificada por D.L. 17239 del 29 de noviembre e instalándose su primer Consejo Nacional presidido por el primer Decano Dr. Jorge de la Flor Valle, en noviembre de 1969.(POR MODIFICAR .Siendo la colegiación un requisito indispensable, el CMP incorpora obligatoriamente a todos los médico-cirujanos que se encuentren legalmente aptos para ejercer la profesión. El CMP tiene como misión fomentar el bienestar social y el trabajo decente de médicos y médicas, promover una reforma por el derecho a la salud y el acceso universal a la seguridad social, garantizar una formación y ejercicio profesional científica, humanista, basada en los principios ético-deontológicos de la profesión ',

    }
      return(
        
        <>
        <div className="datos">
        <h2>{contenido.titulo}</h2>
        <div className="conteiner-datos">
            <h4 className="contenido_cart_descripccion">{contenido.descripccion}</h4> 
            <h2>QUE HACEMOS</h2>
            <h4 className="contenido_cart_descripccion">El CMP desarrolla su trabajo en las siguientes áreas:</h4> 
            <h2>ÉTICA Y DEONTOLOGIA MÉDICA</h2>
            <h4 className="contenido_cart_descripccion">Promueve y vigila el ejercicio profesional en el marco del Código de Ética y Deontología, siguiendo los principios de autonomía, beneficencia, no maleficencia, justicia y confidencialidad.</h4> 
            <h2>GREMIAL PROFESIONAL</h2>
            <h4 className="contenido_cart_descripccion">Promueve el fortalecimiento organizacional de la profesión médica, y la defensa irrenunciable de sus reivindicaciones profesionales y laborales, en coordinación con las organizaciones gremiales médicas, para lograr un trabajo decente y digno.</h4> 
            <h2>DESARROLLO PROFESIONAL CONTINUO</h2>
            <h4 className="contenido_cart_descripccion">Fomenta la calidad de la formación profesional a través de mecanismos como la acreditación de instituciones formadoras, favorece y desarrolla la educación continua, desarrolla procesos de recertificación médica hacia la excelencia del ejercicio de nuestra querida profesión.</h4> 
            <h2>BIENESTAR MÉDICO</h2>
            <h4 className="contenido_cart_descripccion">Brinda servicios sociales a los médicos y médicas en las áreas de atención de salud, bienestar social y asesoría legal, favorece el desarrollo de la infraestructura institucional a través de la construcción de sedes institucionales y recreacionales para los médicos y sus familias. Promueve en las instituciones de salud el desarrollo de oportunidades laborales y de capacitación para los médicos jóvenes.</h4> 
            <h2>INSTITUCIONAL ORGANIZATIVA</h2>
            <h4 className="contenido_cart_descripccion">Promueve la generación de capacidades de los integrantes de sus órganos directivos (Consejo Nacional y Consejos Regionales), así como de sus Comisiones Asesoras (Permanentes y Transitorias) para fortalecer la presencia política y técnica del CMP en asuntos de interés profesional, sanitario y nacional</h4> 
            <h2></h2>
            <h4 className="contenido_cart_descripccion"></h4> 
            <h2>ATENCIÓN DE SALUD DE CALIDAD Y SEGURIDAD DEL PACIENTE</h2>
            <h4 className="contenido_cart_descripccion">Vigilamos y exigimos que se cumplan las condiciones indispensables de infraestructura, equipamiento y recursos que garanticen la calidad y seguridad de los servicios de salud; promovemos una cultura de seguridad y calidad de atención en las organizaciones públicas y privadas de salud; promovemos el trato digno a los usuarios y pacientes, en el marco del respeto a sus derechos y del ejercicio ético de la profesión médica; y trabajamos por establecer un sistema de seguimiento y evaluación de la atención segura y de calidad en establecimientos de salud.</h4> 
            <h2>DESARROLLO SOCIO – SANITARIO</h2>
            <h4 className="contenido_cart_descripccion">Desarrolla el inquebrantable compromiso con la sociedad peruana, con los pacientes a quienes nos debemos, de lucha permanente para que el Derecho a la Salud y a la Seguridad Social, se hagan realidad para hombres y mujeres en nuestro país.</h4> 
            <h2>RELACIONES INTERNACIONALES</h2>
            <h4 className="contenido_cart_descripccion">Desarrolla un fructífero intercambio propuestas y de experiencias, y participa activamente de las acciones de organizaciones médicas internacionales como el Consejo Médico Andino (CMA), la Confederación Médica Latinoamericana y del Caribe (CONFEMEL), la Asociación Médica Mundial (AMM), principalmente.</h4> 


            <div className="contenido-izquierda">
           
            </div>

        </div>
        </div>
        
        </>   
      )  
  }
  
  
  export default Institucion;
  