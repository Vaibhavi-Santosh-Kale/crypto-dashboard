import React from 'react'
import { BsSearch } from "react-icons/bs"
import "./Search.css"
import { useSelector,useDispatch } from 'react-redux'
import { search } from '../state/actions/search'

function Search() {
    const isDark=useSelector((store)=>store.themereducer);
    const sdata = useSelector((store)=>store.searchreducer);
    const dispatch = useDispatch();

    return (
        <div className={`w-full flex rounded-lg ${isDark?"bg-black":"bg-white"}  shadow-sm p-2`}>
            <div className='flex m-auto mx-3 w-fit h-fit'>
                <BsSearch size={19} color="gray"/>
            </div>
            <input value={sdata} className={`w-full ${isDark?"bg-black text-white":"bg-white"}`} onChange={(event)=>{dispatch(search(event.target.value));console.log(sdata)}} type="text" placeholder='Search' />
        </div>
    )
}

export default Search