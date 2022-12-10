import "./MarketCap.css"
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc"
import { useSelector, useDispatch } from 'react-redux'
import Loading from "../../assets/svg/loading.gif"
import axios from "axios"
import updatecap from "../state/actions/updatecap"
import { useEffect} from "react"
import marketloadchange from "../state/actions/ismarketloading"

function MarketCap() {
    const store = useSelector((store) => store.marketCap)
    const dispatch = useDispatch();
    const isLoading = useSelector((store) => store.marketloadingreducer);
    const curr = useSelector((store) => store.updatecurr);

    useEffect(() => {
        dispatch(marketloadchange(true));
        console.log("i am called");
        fetchmarketdata();
    }, [curr]);


    async function fetchmarketdata() {
        await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr}&order=market_cap_desc&per_page=50&page=1&sparkline=false`).then((response) => {
            dispatch(updatecap(response.data));
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

    // setTimeout(() => {
    //     fetchmarketdata();
    // }, 10000);
    return (
        <div className='select-none rounded-xl h-full min-w-fit w-full flex-row-2 bg-white shadow-sm hover:cursor-default overflow-hidden' >
            <div className='flex justify-center h-[45px]  shadow-sm border-b-2 text-2xl p-1'>
                <span>{"Cryptocurrency Market Cap"}</span>
            </div>
            <ul className='h-[calc(100%-45px)] overflow-y-scroll'>
                {
                    isLoading === true ? <div className=" h-full w-full flex justify-center items-center">
                        <div className="animate-pulse">
                            <img className="h-16 w-16" src={Loading} alt="Loading..." />
                        </div>
                    </div> : store.map(({ id, image, market_cap, name, price_change_percentage_24h }) => (
                        <span key={id} className='flex p-2 border-b-2 justify-between hover:scale-105 duration-200 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-300 hover:via-blue-200 hover:'>

                            <span className='flex font-bold text-1xl text-gray-700 w-fit'>
                                <img className='sm:h-8 sm:w-8 h-10 w-10 m-1 rounded-full' src={image} alt="Currency Logo" />
                                <div className='flex flex-col'>
                                    <span className=''>
                                        {name}
                                    </span>
                                    <span className='text-[13px] text-gray-500'>
                                        Mkt Cap :{(market_cap).toLocaleString('en-IN', { style: 'currency', currency: curr })}
                                    </span>
                                </div>
                            </span>
                            <span className='flex my-auto w-20 mr-2 text-right'>
                                <span className='flex m-1  '>
                                    {price_change_percentage_24h < 0 ? <VscTriangleDown color='red' size={20} /> : <VscTriangleUp color='green' size={20} />
                                    }
                                </span>
                                <span className='h-fit w-10'>{Math.abs(price_change_percentage_24h).toFixed(3)}</span>
                                <span>{" %"}</span>
                            </span>
                        </span>
                    ))}
            </ul>
        </div>
    )
}

export default MarketCap