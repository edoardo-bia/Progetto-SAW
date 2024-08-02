//import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Home from "./Home.jsx"
import Project from './Project.jsx'
import Contacts from './Contact.jsx'

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
        <div id='contacts'>
          <Contacts></Contacts>
        </div>
    </>
  )
}

export default App