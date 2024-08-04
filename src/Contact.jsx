import React from 'react';
import './Contact.css'

function Contacts(){

    return(
        <>
            <div className='title_con'>
                <h1>Contact information</h1>
            </div>
            <div>
                <ul className='ul_con'>
                    <li className='li_con'>
                        <a href="mailto: edoardobiagioni@gmail.com">
                            <img src="./src/assets/email-icon.png" alt="Email Icon" className="icon_con"/>
                            <span>Email</span>
                        </a>
                    </li>
                    <li className='li_con'>
                        <a href="https://www.linkedin.com/in/edoardobiagioni/" target="_blank">
                            <img src="./src/assets/linkedin-icon.png" alt="LinkedIn Icon" className="icon_con"/>
                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li className='li_con'>
                        <a href="https://github.com/edoardo-bia" target="_blank">
                            <img src="./src/assets/github-icon.png" alt="GitHub Icon" className="icon_con"/>
                            <span>GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>

        </>
    )
}


export default Contacts