import React from 'react'
import logo from "../assets/almalogo.png"
function Navbar() {
  return (
    <div className='flex shadow-2xl bg-white w-full h-fit fixed z-10 text-black items-center border border-b-1'>
        <img src={logo} alt="logo" className='p-4 w-92 h-fit hover'/>
        <span className="flex border-8 border-gray-300 text-6xl p-10 ml-10 w-fit hover:cursor-default hover:select-none"> 
        Capstone Project - Cryptocurrency Dashboard
        </span>
    </div>
  )
}

export default Navbar