import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Project from './Project.jsx'
/*
const router = createBrowserRouter([
  {
    path: '/Project/1',
    element: <ProjectPage></ProjectPage>,
  }
])*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<RouterProvider router={router}> </RouterProvider>    "Ricoedatri di sostrituire app"*/}
    <App />
  </React.StrictMode>,
)
