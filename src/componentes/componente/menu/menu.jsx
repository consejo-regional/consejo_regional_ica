import React from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';



const Menu = ()=> {

    const [isDarkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = (checked) => {
      setDarkMode(checked);
      console.log('hola mundo')
      document.body.classList.toggle('dark');


    };
  

      return(
        <>
        <div className="principal">
            <div className='contenedor-principal'>
                <div className='contenedor'>
                    <div className="menu">
                        <div className='logo'></div>
                    </div>
                    <div className='switch-dark-mode'>
                        <DarkModeSwitch
                            style={{ marginRight: '2rem' }}
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            size={40}
                            sunColor={'yellow'}
                        />
                    </div>
                    
                </div>
               
            </div>
        </div>
        </>   
      )  
  }
  
  
  export default Menu;
  