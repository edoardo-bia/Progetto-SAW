//import { useState } from 'react'
import './App.css'
import Navbar from "./Navbar.jsx"
import Home from "./Home.jsx"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <div className="nav">
          <Navbar></Navbar>
        </div>
        <div className='home'>
          <Home></Home>
        </div>
        
    </>
  )
}

export default App