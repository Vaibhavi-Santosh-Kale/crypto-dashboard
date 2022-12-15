import React from 'react'

function Button(props) {
  return (
    <div className='h-8 w-8 rounded-md flex items-center justify-center outline outline-1 outline-gray-600'>{props.value}</div>
  )
}

export default Button