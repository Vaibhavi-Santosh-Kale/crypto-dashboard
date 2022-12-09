// import React, { useEffect } from 'react'
import "./MarketCap.css"
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc"

import { useSelector } from 'react-redux'

import { useDispatch } from "react-redux"
import axios from "axios"
import updatecap from "../state/actions/updatecap"
import { useEffect } from "react"
function MarketCap() {

    const store = useSelector((store) => store.marketCap)
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchmarketdata() {
            await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((res) => {
                dispatch(updatecap(res.data));
            })
    }
    fetchmarketdata();
    })
    return (
        <div className='select-none rounded-xl h-full min-w-fit w-full flex-row-2 bg-white shadow-sm hover:cursor-default overflow-hidden' >
            <div className='flex justify-center h-[45px]  shadow-sm border-b-2 text-2xl p-1'>
                <span>{"Cryptocurrency Market Cap"}</span>
            </div>
            <ul className='h-[calc(100%-45px)] overflow-y-scroll'>
                {store.map(({ id, image, market_cap, name, price_change_percentage_24h }) => (
                    <span key={id} className='flex p-2 border-b-2 justify-between hover:scale-105 duration-200 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-300 hover:via-blue-200 hover:'>

                        <span className='flex font-bold text-1xl text-gray-700 w-fit'>
                            <img className='sm:h-8 sm:w-8 h-10 w-10 m-1 rounded-full' src={image} alt="Currency Logo" />
                            <div className='flex flex-col'>
                                <span className=''>
                                    {name}
                                </span>
                                <span className='sm:text-[12px] text-sm text-gray-500'>
                                    Market Cap : {market_cap}
                                </span>
                            </div>
                        </span>
                        <span className='flex my-auto w-20 mr-2 text-right'>
                            <span className='flex m-1  '>
                                {price_change_percentage_24h < 0 ? <VscTriangleDown color='red' size={20} /> : <VscTriangleUp color='green' size={20} />
                                }
                            </span>
                            <span className='h-fit w-10'>{Math.abs(price_change_percentage_24h).toFixed(2)}</span>
                            <span>{" %"}</span>
                        </span>
                    </span>
                ))}

            </ul>

        </div>
    )
}

export default MarketCap