import React from 'react'


function Exchange() {
  return (
    <>
    <div className="bg-white my-6 p-6 rounded-md">
        <h1 className="text-xl font-bold">Exchange Coins</h1>
      <div className="flex flex-col">
        <div className="flex justify-around">
          <h4 className="text-orange-600 font-semibold text-xl" >Sell</h4>
          <select 
            name="currency"
            className="bg-slate-100 w-20 h-8 text-center text-lg font-semibold rounded-md list-item">
              <option>INR</option>
              <option>USD</option>
          </select>
        </div>
        <div className="flex justify-around pt-4">
          <h4 className="text-green-600 font-semibold text-xl">Buy</h4>
          <select
            name="currency"
            className="bg-slate-100 w-20 h-8 text-center text-lg font-semibold rounded-md list-item">
              <option>INR</option>
              <option>USD</option>
          </select>
        </div>
        <div className="flex justify-center pt-8">
          <button className="bg-blue-600 py-2 px-3 rounded-md">Exchange</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Exchange
