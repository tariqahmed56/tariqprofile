import React, { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useData } from "../context";
const Navbar = () => {
  let {darkMood, setDarkMood} = useData();
  let [showMenu, setShowMenu] = useState(false);
  // let [darkMode, setDarkMood] = useState(true);
  !darkMood && document.body.classList.add('lightMode')
  function toggleTheme() {
    setDarkMood((prev) => !prev);
    document.body.classList.toggle("lightMode");
    
  }
  return (
    <nav
      className={`flex justify-between items-center relative h-[80px]  box-border`}
    >
      <div className="nav-part-1">
         <h1><Link to={'/'} className="font-extrabold text-3xl gradient">Tariq</Link></h1>
      </div>
      <ul className="md:flex gap-5 hidden">
        <li className=" "><Link to={'projects'} className="font-[500]">Projects</Link></li>
        <li><Link to={'contact'} className="font-[500]">Contact</Link></li>
        <li ><Link to={'AboutMe'} className="font-[500]"> About me</Link></li>
      </ul>
      <div className="flex gap-5 justify-center items-center">
        <button className="bg-[#463ed3] hover:bg-[#4f4aae] px-4 py-2 rounded text-[14px] md:block hidden font-semibold text-white">
          Hire me
        </button>
        <button
          className="p-2 bg-[#1E3851] rounded-xl w-10 h-10 flex justify-center items-center"
          onClick={toggleTheme}
        >
          {darkMood ? (
            <LuSunMoon size={25} color="gray" />
          ) : (
            <IoMoonOutline size={25} color="gray" />
          )}
        </button>
      </div>

      <AiOutlineMenuFold
        size={30}
        className=" md:hidden"
        onClick={() => setShowMenu((prev) => !prev)}
        color={!darkMood ? 'black' : 'white'}
      />

      <ul
        className={`md:hidden gap-5 ${
          showMenu ? "flex" : "hidden"
        } flex-col  absolute top-[80px] w-full px-5 py-4 bg-[#0D2438] shadow-lg`}
      >
        <li className="font-[500] bottomLine py-2">Projects</li>
        <li className="font-[500] bottomLine py-2">About me</li>
        <li className="font-[500] bottomLine py-2">Contact</li>
        <li className="font-[500] bottomLine py-2">
          <button className="bg-[#463ed3] hover:bg-[#4f4aae] px-4 py-2 rounded text-[14px] font-semibold text-white z-10">
            Hire me
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
