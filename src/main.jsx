import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Projects from './pages/Projects.jsx'
import Hero from './Components/Hero.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>}>
    <Route index element={<Hero/>}/>
    <Route path='projects' element={<Projects/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='AboutMe' element={<About/>}/>

  </Route>
  </Routes>
  </BrowserRouter>
      </React.StrictMode>,
)
