import React from 'react'
import logo from "../assets/logo/almalogo.png"
function Navbar() {
  return (
    <div className='flex shadow-xl bg-white w-screen h-[10%] text-black items-center border border-b-1'>
        <img src={logo} alt="logo" className='p-4 w-36 h-fit hover ml-6'/>
        <span className="sm:hidden border-2 border-gray-300 text-sm p-2 ml-4 w-fit hover:cursor-default select-none "> 
        Capstone Project - Cryptocurrency Dashboard
        </span>
    </div>
  )
}

export default Navbar