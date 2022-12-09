import React, {useState} from 'react'



function Exchange() {

const  handleChange=()=>{


}
  

  return (
    <> 

    <div className="bg-white w-full rounded-md mt-3 ">
        <h1 className="text-xl font-bold my-2">Exchange Coins</h1>
      <div className="flex flex-col">
        <div className="flex justify-around">
          <h4 className="text-orange-600 font-semibold text-xl " >Sell</h4>
          <select  name="currency" className="bg-slate-100 w-20 h-8 text-center text-lg font-semibold rounded-md list-item">
              <option>INR</option>
              <option>USD</option>
          </select>
        </div>
        <div className="flex justify-around pt-4">
          <h4 className="text-green-600 font-semibold text-xl">Buy</h4>
          <select name="currency" className="bg-slate-100 w-20 h-8 text-center text-lg font-semibold rounded-md list-item">
              <option>INR</option>
              <option>USD</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center pt-2">
          <button className="bg-blue-600 py-1 px-4 rounded-md pl-3" onClick={handleChange}>Exchange</button>
        </div>
    </div>

    </>
  )
}

export default Exchange
