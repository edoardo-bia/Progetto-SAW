import React from 'react';
import './Project.css'
import Card from './Card';

function Project(){

    const handleCardClick = (cardTitle) => {};

    return(
        <>
            <div className='title'>
                <h1>Projects</h1>
            </div>
                <h3>Those are the project that I made:</h3>
            <div className='cards'>    
                <div className="top-cards">
                    <Card title="Lab 3" content="Java exam where i created a tripAdvisor like app (backend)" img="./src/assets/tripAdvisor.jpg" alt="app" onClick={() => handleCardClick("1")}/>
                    <Card title="Mine Sweeper" content="I tried to recreate Mine sweeper using Java to exercise" img="./src/assets/mineSweeper.jpeg" alt="app" onClick={() => handleCardClick("2")}/>
                    <Card title="Lab 2" content="Exam in C and Python using threads, developed in Linux" img="./src/assets/lab2.jpg" alt="app" onClick={() => handleCardClick("3")}/>
                </div>
                <div className="bottom-cards">    
                    <Card title="Cybersecurity" content="Power point presentation about malware and keyloggers" img="./src/assets/sicurezza2.jpg" alt="app" onClick={() => handleCardClick("4")}/>
                    <Card title="This Web App" content="It's this site! Created using react for SAW exam" img="./src/assets/thisApp.jpg" alt="app" onClick={() => handleCardClick("5")}/>
                </div>
            </div>   
        </>
    )
}


export default Project