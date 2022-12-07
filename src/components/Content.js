import React from 'react'
import MarketCap from './MarketCap'

function Content() {
  return (
    <>
      <div className='flex mt-5 h-[90vh] w-screen p-12 '>
        <div className='border-b-2 rounded-2xl bg-[#fafbff] h-full w-full p-8 '>
          <MarketCap/>
        </div>
      </div>
    </>
  )
}

export default Content