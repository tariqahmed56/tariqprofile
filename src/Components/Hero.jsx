import React from 'react';
import { animate, easeOut, motion, useAnimation } from 'framer-motion';
import heroimg from '../assets/giphy.gif';
import { useData } from '../context';
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import resume from '../assets/resume.png';
const skills = [
  {
    id: 1,
    icon: <ImHtmlFive color='brown' size={100}/>,
    name: 'HTML'

  },
  {
    id: 2,
    icon: <SiCss3 color='blue' size={100}/>,
    name: 'CSS'

  },
  {
    id: 3,
    icon: <SiJavascript color='yellow' size={100}/>,
    name: 'JavaScript'
  },
  {
    id: 4,
    icon: <FaReact color='blue' size={100}/>,
    name: 'React'
  },
   {
      id: 5,
      icon: <SiTailwindcss color='blue' size={100}/>,
      name: 'Tailwind'
    }
  
]
const Hero = () => {
  const { darkMood, setDarkMood } = useData();
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.4, 
        
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 , transition: { duration: 0.7, ease: "easeInOut" }},
  };
  const skillConttainer =  {
    initial: {},
    animate:{
      transition:{
        staggerChildren: 0.5
      }
    }
  }
  const SkillsContainerChildren = {
    initial:{opacity:0,y:-20},
    animate:{opacity:1, y:0, transition:{duration:0.5, ease:'easeInOut'}},
  }
  return (
    <div>

    <div className='hero flex justify-between gap-[24px] items-center flex-col md:flex-row pt-7 md:pt-0'>
      <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
        className="intro-text flex flex-col justify-end items-start xl:mt-8"
       
      >
        <motion.h1 
        variants={childVariants}
        className={`text-4xl font-bold mb-5`}>HI, I AM Tariq</motion.h1>
        <motion.h2 
        variants={childVariants}
        className={`text-gray-500 text-[30px] font-semibold leading-8`}>A Frontend developer &<br /> Designer</motion.h2>
        <motion.button 
        variants={childVariants}
        className='px-8 py-2 rounded-md bg-white text-xl font-semibold text-gray-700 mt-8 shadow-md'>
          <a href={resume} download>Download Cv</a>
        </motion.button>
      </motion.div>
      <div>
        <motion.img
          src={heroimg}
          className='w-[100%] img-animation'
          alt="hero image"
          initial={{ opacity: 0, y: 200, x:60 }} 
          animate={{ opacity: 1, y: 0 , x:0}} 
          transition={{ duration: 0.6, ease: "easeInOut" }} 
        />
      </div>
    </div>

    <div className='flex flex-col gap-2  items-center justify-center  '>
        <h1 className="text-center text-4xl font-bold relative pl-3">
          <div className=" mr-3 top-[7px] h-8 w-[3px] bg-[#a49f9f] absolute left-0"></div> Skills Showcase</h1>
       <div className="flex flex-wrap xl:flex-nowrap top-[30px] justify-center relative gap-[60px] " 
       variants={skillConttainer} initial='initial' whileinview='animate'>

{skills.map((item,idex)=>(
  <motion.div 
    key={item.id}
    variants={SkillsContainerChildren}
    className="icons  p-4 rounded shadow-md w-[200px] flex flex-col justify-center items-center"
    initial="initial" 
    whileInView="animate"
  >
    {item.icon}
    <span>{item.name}</span>
  </motion.div>
))}

       </div>
      </div>
    </div>
  );
};

export default Hero;
