import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contac from './pages/Contac'

  const router=createBrowserRouter([
   
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/About',
          element:<About/>
        },
        {
          path:'/Services',
          element:<Services/>
        },
        {
          path:'/Contac',
          element:<Contac/>
        }
      ]
    },
    
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
)
