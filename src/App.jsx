import { useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
// Footer
import { DataContext } from './context';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
// DataContext
function App() {
  return (
    <DataContext>
    <main className='lg:px-[8vw] px-[5vw]'>
    <Navbar/>
     <Outlet></Outlet>
     <Footer/>
    </main>
    </DataContext>
  )
}

export default App
