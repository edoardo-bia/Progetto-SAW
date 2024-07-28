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
                    <Card title="Lab 3" content="Java exam where i created a tripAdvisor like app" img="./src/assets/tripAdvisor.png" alt="app" onClick={() => handleCardClick("1")}/>
                    <Card title="Mine Sweeper" content="I tried to recreate a mine sweepwe game uusing Java to exercise" img="./src/assets/mineSweeper.png" alt="app" onClick={() => handleCardClick("2")}/>
                    <Card title="Lab 2" content="C Exam using threads" img="./src/assets/lab2.png" alt="app" onClick={() => handleCardClick("3")}/>
                </div>
                <div className="bottom-cards">    
                    <Card title="Cybersecurity" content="Power point presentation about keyloggers" img="./src/assets/sicurezza2.png" alt="app" onClick={() => handleCardClick("4")}/>
                    <Card title="This Web App" content="Created using react for SAW exam" img="./src/assets/thisApp.png" alt="app" onClick={() => handleCardClick("5")}/>
                </div>
            </div>   
        </>
    )
}


export default Project