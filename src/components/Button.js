import React from 'react'

function Button(props) {
    return (
    <div className='h-8 w-8 rounded-md flex items-center hover:cursor-pointer justify-center outline outline-1 outline-gray-600' onClick={()=>{{props.day(props.dayVal)}}}>{props.value}</div>
  )
}

export default Button