import React from 'react'
import MarketCap from './MarketCap'

function Content() {
  return (
    <>
      <div className='flex w-full'>
        <div className=' rounded-2xl h-full  bg-[#fafbff] p-10'>
          <MarketCap/>
        </div>
      </div>
    </>
  )
}

export default Content