import React,{useState} from "react";
import { useSelector } from "react-redux";
import "./Exchange.css";



function Exchange() {
const [change , setChange]=useState("")

const hendleClick=()=>{

     
}

const hendleBuyChange=(e)=>{
  setChange(e.target.value)
   

}

const hendleShellChange=(e)=>{
  setChange(e.target.value)
    

}
  return (
    <>
      <div className="flex flex-col h-full bg-white w-full rounded-md p-6 gap-2 justify-evenly min-w-fit">
        <div className="text-xl font-bold">Exchange Coins</div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="w-[55%]"></div>
            <div className="h-full w-fit">
              <div className="w-full h-full text-gray-400 text-sm">
                Enter Amount:
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h4 className="text-orange-600 font-semibold text-xl h-fit my-auto w-[25%] justify-center pl-[10%]" value={change} onChange={hendleShellChange}>
              Sell
            </h4>
            <div className="flex w-[30%]">
              <select
                name="currency"
                className="bg-slate-200 w-36 h-8 text-center text-lg font-semibold rounded-md list-item"
              >
                <option>INR</option>
                <option>USD</option>
              </select>
            </div>
            <div className="h-full w-fit mx-2">
              <input
                type="number"
                min="0"
                placeholder={"Avl Bal"}
                className="w-full h-full rounded-md border-2 pl-3"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h4 className="text-green-600 font-semibold text-xl h-fit my-auto w-[22.5%] justify-center pl-[10%]" value={change} onChange={hendleBuyChange}>
              Buy
            </h4>
            <div className="flex w-[30%]">
              <select
                name="currency"
                className="bg-slate-200 w-36 h-8 text-center text-lg font-semibold rounded-md list-item"
              >
                <option>INR</option>
                <option>USD</option>
              </select>
            </div>
            <div className="h-full w-fit">
              <div className="w-full h-full text-green-400 mx-2">
                {"{Exchange Coins block}"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-full">
          <button className="hover:scale-105 duration-300 bg-gradient-to-tr from-cyan-400 to-blue-600 via-cyan-500 rounded-lg text-lg font-bold h-12 w-32" onClick={hendleClick}>
            Exchange
          </button>
        </div>
      </div>
    </>
  );
}
export default Exchange;
