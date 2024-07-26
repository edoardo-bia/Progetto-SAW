import './Home.css'

function Home(){
    return(
        <>
            <div className='img'>
                <img src="./image.jpg" alt="Me" style={{borderRadius:'50%'}} className='profile-img'/>
            </div>
            <div className='content'>
                <h1>Edoardo Biagioni</h1>       
                <p>Der Mercedes-AMG GT R ist ein Hochleistungs-Sportwagen, der von der deutschen Automobilmarke Mercedes-Benz unter dem Label AMG entwickelt wurde. Dieses Fahrzeug repräsentiert das Spitzenmodell der GT-Serie und ist auf der Rennstrecke ebenso beeindruckend wie auf der Straße.</p>
                <p>Der GT R wird von einem 4,0-Liter-V8-Biturbomotor angetrieben, der eine beeindruckende Leistung von 585 PS und ein maximales Drehmoment von 700 Nm bietet. Diese Kraft ermöglicht es dem Fahrzeug, in nur 3,6 Sekunden von 0 auf 100 km/h zu beschleunigen und eine Höchstgeschwindigkeit von 318 km/h zu erreichen. Der Motor ist mit einem 7-Gang-Doppelkupplungsgetriebe kombiniert, das schnelle und präzise Schaltvorgänge ermöglicht.</p>
                <p>Das Design des Mercedes-AMG GT R ist sowohl ästhetisch ansprechend als auch funktional. Die aggressive Frontpartie mit dem markanten Panamericana-Grill und die breiten Kotflügel verleihen dem Fahrzeug ein kraftvolles und dynamisches Erscheinungsbild. Die aerodynamischen Elemente, wie der verstellbare Heckflügel und der große Diffusor, tragen zur verbesserten Stabilität und Leistungsfähigkeit bei hohen Geschwindigkeiten bei.</p>
            </div>
            
        </>
    )
}


export default Home