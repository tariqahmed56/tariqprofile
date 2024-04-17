import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../productList/src/Components/Navbar/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import { DataContext } from './context'
const LayOut = () => {
  return (
    <DataContext>
    <main className='lg:px-[8vw] px-[5vw]'>
    <Navbar/>
     <Hero/>
     <Footer/>
    </main>
    </DataContext>
   
  )
}

export default LayOut
