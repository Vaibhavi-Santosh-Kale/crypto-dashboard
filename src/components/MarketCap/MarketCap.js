import "./MarketCap.css"
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc"
import { useSelector, useDispatch } from 'react-redux'
import Loading from "../../assets/svg/loading.gif"
import LoadingWhite from "../../assets/svg/loadingwhite.gif"
import axios from "axios"
import updatecap from "../state/actions/updatecap"
import { useEffect } from "react"
import marketloadchange from "../state/actions/ismarketloading"

function MarketCap() {
    const store = useSelector((store) => store.marketCap)
    const dispatch = useDispatch();
    const isLoading = useSelector((store) => store.marketloadingreducer);
    const curr = useSelector((store) => store.updatecurr);
    const isDark = useSelector((store) => store.themereducer);
    const search = useSelector((store) => store.searchreducer);

    useEffect(() => {
        dispatch(marketloadchange(true));
        console.log("i am called");
        fetchmarketdata();
    }, [curr]);


    async function fetchmarketdata() {
        await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr}&order=market_cap_desc&per_page=100&page=1&sparkline=false`).then((response) => {
            dispatch(updatecap(response.data));
            (response.data).map(({name})=>console.log(name));
            dispatch(marketloadchange(false));
            console.log("i am async called");
        }).catch((error) => {
            dispatch(marketloadchange(true));
            setTimeout(() => {
                fetchmarketdata();
            }, 20000);
            console.log(error, "api request limit exceed");
        });
    }

    // setInterval(() => {
    //     fetchmarketdata();
    // }, 10000);
    return (
        <div className={`select-none rounded-xl h-full min-w-fit w-full flex-row-2 ${isDark ? "bg-black text-white" : "bg-white"}  shadow-sm hover:cursor-default overflow-hidden`} >
            <div className='flex justify-center h-[45px]  shadow-sm border-b-2 text-2xl p-1'>
                <span>Cryptocurrency Market Cap</span>
            </div>
            <ul className='h-[calc(100%-45px)] overflow-y-scroll'>
                {
                    isLoading ? <div className=" h-full w-full flex justify-center items-center">
                        <div className="animate-pulse">
                            {isDark ? <img className="h-16 w-16" src={Loading} alt="Loading..." /> : <img className="h-16 w-16" src={LoadingWhite} alt="Loading..." />}
                        </div>
                    </div> :


                        store.map(({ id, image, market_cap, name, price_change_percentage_24h, current_price, total_volume, high_24h, low_24h, market_cap_change_24h }) => (

                            <>
                                <span key={id} className={`group p-2 border-b-2 justify-between ${name.toLowerCase().startsWith((search.toLowerCase())) ? "flex" : name.toLowerCase().includes((search.toLowerCase())) ? "flex" : "hidden"} hover:scale-105 duration-200 hover:bg-gradient-to-r h-fit hover:from-cyan-50 hover:to-blue-300 hover:via-blue-200`}>
                                    <div className="flex-col w-full">
                                        <div className="flex w-full justify-between">
                                            <span className='flex font-bold text-1xl text-gray-700 w-fit'>
                                                <img className='sm:h-8 sm:w-8 h-10 w-10 m-1 rounded-full' src={image} alt="Currency Logo" />
                                                <div className='flex flex-col'>
                                                    <span className=''>
                                                        {name}
                                                    </span>
                                                    <span className='text-[13px] text-gray-500'>
                                                        Mkt Cap :{(market_cap)}
                                                    </span>
                                                </div>
                                            </span>
                                            <span className='flex flex-col w-fit mr-2 text-right'>
                                                <span className="text-gray-700 font-bold text-sm">Price: {(current_price).toLocaleString('en-IN', { style: 'currency', currency: curr })}</span>
                                                <div className="flex flex-row justify-end">
                                                    <span className='flex m-1  '>
                                                        {price_change_percentage_24h < 0 ? <VscTriangleDown color='red' size={20} /> : <VscTriangleUp color='green' size={20} />}
                                                    </span>
                                                    <span className='h-fit w-10 text-gray-500'>{Math.abs(price_change_percentage_24h).toFixed(2)}</span>
                                                    <span className="text-gray-500">{" %"}</span>
                                                </div>
                                            </span>
                                        </div>
                                        <div className={`hidden group-hover:flex p-2 pb-0 text-[13px] text-gray-500 justify-between font-semibold`}>
                                            <div className="flex flex-col">
                                                <div>
                                                    Total Volume : {total_volume}
                                                </div>
                                                <div>
                                                    Cap Change : {market_cap_change_24h}
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex justify-end">
                                                    24h High : {(high_24h).toLocaleString('en-IN', { style: 'currency', currency: curr })}

                                                </div >
                                                <div className="flex justify-end">
                                                    24h Low : {(low_24h).toLocaleString('en-IN', { style: 'currency', currency: curr })}

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </span>
                            </>

                        ))}
            </ul>
        </div>
    )
}

export default MarketCap