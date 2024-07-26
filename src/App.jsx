//import { useState } from 'react'
import './App.css'
import Navbar from "./Navbar.jsx"
import Home from "./Home.jsx"
import Project from './Project.jsx'

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
        <div className='proj'>
          <Project></Project>
        </div>
    </>
  )
}

export default App