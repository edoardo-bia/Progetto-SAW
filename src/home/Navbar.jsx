import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './form';
import "./Navbar.css";
import loginLogo from '../assets/login.png';
import themeLogo from '../assets/theme.png';

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

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

    return(
        <>
        <div>
            <ul id="link_nav">
                <li className='li_nav'><Link to="/" onClick={handleHomeClick}>Home</Link></li>
                <li className='li_nav'><a href="#Projects" onClick={() => handleScroll('proj')}>Projects</a></li>
                <li className='li_nav'><a href="#Contacts" onClick={() => handleScroll('contacts')}>Contacts</a></li>
            </ul>
        </div>
        <div>
          <ul id="icon_nav">
            <li className='li_nav' onClick={() => handleClick('theme')}> <img src={themeLogo} width={30} height={30} alt="Theme icon" /> </li>
            <li className='li_nav' onClick={() => handleLoginClick('login')}> <img src={loginLogo} width={29} height={29} alt="Login icon" /> </li>
            {showLogin && 
              <div id='login_form_container'>
                <Form />
              </div>}
          </ul>
        </div>
        </>
    )
}


export default Navbar