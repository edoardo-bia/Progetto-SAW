import './App.css'
import Navbar from './home/Navbar'
import Home from "./home/Home.jsx"
import Project from './home/Project'
import Contacts from './home/Contact.jsx'
import NotificationComponent from "./notification/NotificationComponent.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
        <div>
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