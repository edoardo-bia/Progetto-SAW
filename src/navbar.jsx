import "./Navbar.css"

function Navbar(){
    return(
        <>
        <div>
            <ul id="link_nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </div>
        <div>
        <ul id="icon_nav">
                <li onClick={() => handleClick('theme')} style={{cursor: 'pointer'}}> <img src="./src/assets/theme.png" width={30} height={30} alt="Theme icon" /> </li>
                <li onClick={() => handleClick('login')} style={{cursor: 'pointer'}}> <img src="./src/assets/login.png" width={30} height={30} alt="Theme icon" /> </li>
            </ul>
        </div>
        </>
    )
}


export default Navbar