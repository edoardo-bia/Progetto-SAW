import { useState } from 'react'
import Form from './form';
import "./Navbar.css"

function Navbar() {
  
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = 95;
        const elementPosition = section.getBoundingClientRect().top;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    }
  };

const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  }

    return(
        <>
        <div>
            <ul id="link_nav">
                <li><a href="#Home" onClick={() => handleScroll('home')}>Home</a></li>
                <li><a href="#Projects" onClick={() => handleScroll('proj')}>Projects</a></li>
                <li><a href="#Contacts" onClick={() => handleScroll('contacts')}>Contacts</a></li>
            </ul>
        </div>
        <div>
        <ul id="icon_nav">
                <li onClick={() => handleClick('theme')} style={{cursor: 'pointer'}}> <img src="./src/assets/theme.png" width={30} height={30} alt="Theme icon" /> </li>
                <li onClick={() => handleLoginClick('login')} style={{cursor: 'pointer'}}> <img src="./src/assets/login.png" width={29} height={29} alt="Theme icon" /> </li>
                {showLogin && <Form />}
            </ul>
        </div>
        </>
    )
}


export default Navbar