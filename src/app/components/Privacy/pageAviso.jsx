'use client'; 
// import React from 'react'; 
// import Popup from 'reactjs-popup'; 
// import 'reactjs-popup/dist/index.css'; 
  
// export default function PopupGfg(){ 
//   return( 
//   <div> 
//     <h4>NextJs Popup - GeeksforGeeks</h4> 
//     <Popup trigger={<button> Click to open popup </button>}  
//      position="right center"> 
//       <div>GeeksforGeeks</div> 
//       <button>Click here</button> 
//     </Popup> 
//   </div> 
//   ) 
// };
import React from 'react'

import AvisoModal from './AvisoModal';
function Privacy() {
  return (
    <div>
        <AvisoModal></AvisoModal>

        <h1>Aviso de privacidad</h1>
        <h1>Fecha de última actualización: [12/02/24]</h1>
        <h1>Cake Code</h1>
    
        <div>En Cake-Code, nos comprometemos a proteger y respetar su privacidad. Este Aviso de Privacidad explica cómo recopilamos, utilizamos y protegemos la información personal que pueda proporcionarnos a través de nuestro sitio web.
        <p>
        La presente Política de Privacidad describe cómo Cake Code recopila, utiliza y protege los datos personales proporcionados por sus usuarios al utilizar nuestra página.
        </p>
        <p>Información que Recopilamos:</p>
        <ul>
            <li>Nombre completo</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Contraseña y detalles del perfil</li>
            <li>Dirección de envío</li>
            <li>Información de pago (tarjeta de débito/crédito)</li>
        </ul></div>
        
        <br />
        <h3>Uso de la Información:</h3>
        <p>Utilizamos la información proporcionada para procesar sus pedidos, enviar confirmaciones de compra, facilitar la entrega de productos y brindar un servicio al cliente eficiente. Su información de pago se utiliza exclusivamente para completar transacciones y no se almacena en nuestros sistemas después de la compra.</p>
        <br />
        <h3>Protección de la Información:</h3>
        <p>Implementamos medidas de seguridad técnicas y organizativas para garantizar la confidencialidad y seguridad de su información personal. Tomamos precauciones razonables para protegerla contra accesos no autorizados, pérdidas, mal uso o alteración.</p>
        <br />
        <h3>No Compartimos su Información:</h3>
        <p>Su privacidad es importante para nosotros. No compartiremos, venderemos ni alquilaremos su información personal a terceros para fines de marketing u otros sin su consentimiento expreso.</p>
        <br />
        <h3>Cookies y Tecnologías Similares:</h3>
        <p>Utilizamos cookies y tecnologías similares para mejorar su experiencia de navegación en nuestro sitio web. Puede ajustar la configuración de su navegador para rechazar cookies, pero esto podría afectar la funcionalidad del sitio.</p>
        <br />
        <h3>Cambios en el Aviso de Privacidad:</h3>
        <p>Nos reservamos el derecho de actualizar este Aviso de Privacidad ocasionalmente. Le recomendamos revisar periódicamente los cambios para estar informado sobre cómo estamos protegiendo su información.</p>
        <br />
        <h3>Derechos de Privacidad:</h3>
        <p>Usted tiene derechos sobre su información personal, incluido el acceso, corrección y eliminación. Para ejercer estos derechos o realizar preguntas sobre nuestro Aviso de Privacidad, contáctenos a través de la información proporcionada al principio de este aviso.</p>
    
        Al utilizar nuestro sitio web, usted acepta los términos de este Aviso de Privacidad. Agradecemos la confianza que deposita en Cake-Code y nos comprometemos a proteger y respetar su privacidad.
    
        Atentamente,
    
        [Nombre del Responsable de Privacidad o Departamento]
    
    Cake-Code</div>
  )
}

export default Privacy