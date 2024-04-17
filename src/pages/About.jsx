import React, { useEffect } from 'react'
import tariq from '../assets/Tariq.png'
import { motion } from 'framer-motion'
const About = () => {
    useEffect(()=>{
        
    },[])
  return (
    <div className='flex flex-wrap xl:flex-nowrap py-[50px] px-8 justify-center items-center gap-9'>
        <motion.div 
        initial={{opacity:0, y:-60,x:-30 }}
        animate={{opacity:1,y:0, x:0}}
        transition={{duration:0.6, ease:"easeInOut"}}
        className="img-div w-[250px] h-[250xpx] rounded-md overflow-hidden relative bg-slate-900 flex justify-center items-center">

      <img src={tariq} className='w-[80%] '/>
        </motion.div>
        <motion.p
        initial={{opacity:0, y:60,x:30 }}
        animate={{opacity:1,y:0, x:0}}
        transition={{duration:0.6, ease:"easeInOut"}}
        className='w-[700px] text-2xl'>
            Aspiring Front End Developer with a strong foundation 
            in web development. Eager to learn and apply web-based user 
            interaction concepts and create responsive user interfaces using React. 
            Skilled in translating design mockups into clean code, and proficient in JavaScript
             and React JS. Dedicated to optimizing frontend performance and problem-solving 
             to enhance the user experience.
        </motion.p>
    </div>
  )
}

export default About
