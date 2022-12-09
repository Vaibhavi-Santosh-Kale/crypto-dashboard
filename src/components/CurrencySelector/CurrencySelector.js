import React from 'react'
import "./CurrencySelector.css"
import { RiArrowDropDownLine } from "react-icons/ri"

function CurrencySelector() {
    return (
        <div className='flex justify-between bg-white rounded-lg shadow-sm p-2 w-full min-w-fit'>
            <span className='w-full text-center text-lg font-bold'>
                USD
            </span>
            <span className='my-auto h-fit min-h-fit'>
                <RiArrowDropDownLine size={25} color="gray" />
            </span>

        </div>
    )
}

export default CurrencySelector