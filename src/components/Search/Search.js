import React from 'react'
import { BsSearch } from "react-icons/bs"
import "./Search.css"
import { useSelector } from 'react-redux'

function Search() {
    const isDark=useSelector((store)=>store.themereducer);
    return (
        <div className={`w-full flex rounded-lg ${isDark?"bg-black":"bg-white"}  shadow-sm p-2`}>
            <div className='flex m-auto mx-3 w-fit h-fit'>
                <BsSearch size={19} color="gray"/>
            </div>
            <input className={`w-full ${isDark?"bg-black text-white":"bg-white"}`} type="text" placeholder='Search' />
        </div>
    )
}

export default Search