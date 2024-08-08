import React from 'react';
import './Project.css'
import Card from '../project/Card.jsx';
import { Link } from 'react-router-dom';

function Project(){

    return(
        <>
            <div className='title'>
                <h1>Projects</h1>
            </div>
                <h3>Those are the project that I made:</h3>
            <div className='cards'>    
                <div className="top-cards">
                    <Link to= '/Project/1' ><Card title="Lab 3" content="Java exam where i created a tripAdvisor like app (backend)" img="./src/assets/tripAdvisor.jpg" alt="app"/> </Link>
                    <Link to= '/Project/2' ><Card title="Mine Sweeper" content="I tried to recreate Mine sweeper using Java to exercise" img="./src/assets/mineSweeper.jpeg" alt="app"/> </Link>
                    <Link to= '/Project/3' ><Card title="Lab 2" content="Exam in C and Python using threads, developed in Linux" img="./src/assets/lab2.jpg" alt="app"/> </Link>
                </div>
                <div className="bottom-cards">    
                    <Link to= '/Project/4' ><Card title="Cybersecurity" content="Power point presentation about malware and keyloggers" img="./src/assets/sicurezza2.jpg" alt="app"/> </Link>
                    <Link to= '/Project/5' ><Card title="This Web App" content="It's this site! Created using react for SAW exam" img="./src/assets/thisApp.jpg" alt="app"/> </Link>
                </div>
            </div>   
        </>
    )
}


export default Project