import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './services/router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
