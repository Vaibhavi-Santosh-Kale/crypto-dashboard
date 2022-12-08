import React from 'react'
import { BsSearch } from "react-icons/bs"
import "./Search.css"

function Search() {
    return (
        <div className='w-full flex rounded-lg bg-white shadow-sm p-2'>
            <div className='flex m-auto mx-3 w-fit h-fit'>
                <BsSearch size={19} color="gray"/>
            </div>
            <input className='w-full' type="text" placeholder='Search' />
        </div>
    )
}

export default Search