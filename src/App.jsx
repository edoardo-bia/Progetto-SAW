//import { useState } from 'react'
import './App.css'
import Navbar from "./Navbar.jsx"
import Home from "./Home.jsx"
import Project from './Project.jsx'

function App() {

  return (
    <>
        <div id="nav">
          <Navbar></Navbar>
        </div>
        <div id='home'>
          <Home></Home>
        </div>
        <div id='proj'>
          <Project></Project>
        </div>
    </>
  )
}

export default App