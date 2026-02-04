import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar  from './Components/Section1/Navbar.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <App />
   
   </BrowserRouter>
   
)
