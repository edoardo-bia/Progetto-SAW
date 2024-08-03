import './App.css'
import Navbar from './Navbar.jsx'
import Home from "./Home.jsx"
import Project from './Project.jsx'
import Contacts from './Contact.jsx'
import Form from './form.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
        <div id="nav">
          <Navbar />
        </div>
        <div id='home'>
          <Home />
        </div>
        <div id='proj'>
          <Project />
        </div>
        <div id='contacts'>
          <Contacts />
        </div>
    </>
  )
}

export default App