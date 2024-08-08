import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';
import ProjectPage from './project/ProjectPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/project/:projectID',
    element: <ProjectPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}> </RouterProvider>    
    </AuthProvider>
  </React.StrictMode>,
);