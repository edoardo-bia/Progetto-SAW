import React from 'react';
import './Project.css'
import Card from './Card';

function Project(){

    const handleCardClick = (cardTitle) => {console.log(`Hai cliccato ${cardTitle}`); };

    return(
        <>
            <div className='title'>
                <h1>Projects</h1>
            </div>
                <h3>Those are the project that i made:</h3>
            <div className='cards'>    
                <div className="top-cards">
                    <Card title="1" content="This is the first card." onClick={() => handleCardClick("1")}/>
                    <Card title="2" content="This is the second card." onClick={() => handleCardClick("2")}/>
                    <Card title="3" content="This is the third card." onClick={() => handleCardClick("3")}/>
                </div>
                <div className="bottom-cards">    
                    <Card title="4" content="This is the fourth card." onClick={() => handleCardClick("4")}/>
                    <Card title="5" content="This is the fifth card." onClick={() => handleCardClick("5")}/>
                </div>
            </div>   
        </>
    )
}


export default Project