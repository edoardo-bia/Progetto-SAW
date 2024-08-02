import React from 'react';
import './Contact.css'

function Contacts(){

    return(
        <>
            <div>
                <h1>Contacts</h1>
                <h3>Contact me on: </h3>
            </div>
            <div>
                <ul className='ul_con'>
                    <li className='li_con'>
                        <a href="mailto: edoardobiagioni@gmail.com">
                            <img src="./src/assets/email-icon.png" alt="Email Icon" class="icon_con"/>
                            Email to edoardobiagioni@gmail.com
                        </a>
                    </li>
                    <li className='li_con'>
                        <a href="https://www.linkedin.com/in/edoardobiagioni/" target="_blank">
                            <img src="./src/assets/linkedin-icon.png" alt="LinkedIn Icon" class="icon_con"/>
                            LinkedIn
                        </a>
                    </li>
                    <li className='li_con'>
                        <a href="https://github.com/edoardo-bia" target="_blank">
                            <img src="./src/assets/github-icon.png" alt="GitHub Icon" class="icon_con"/>
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>

        </>
    )
}


export default Contacts