import React from 'react'

function MarketCap() {

    const itemlist = [
        {
            id: 1,
            name: "Bitcoin",
            test1: "dlwa",
        },
        {
            id: 2,
            name: "Ethereum",
            test1: "dlkfjasdf",
        },
        {
            id: 3,
            name: "Litecoin",
            test1: "dd",
        },
        {
            id: 4,
            name: "UMA Coin",
            test1: "as",
        },
        {
            id: 5,
            name: "Tether",
            test1: "dlkfja",
        },
        {
            id: 6,
            name: "Tether",
            test1: "dlkfja",
        },
        {
            id: 7,
            name: "Tether",
            test1: "dlkfja",
        },
        {
            id: 8,
            name: "Tether",
            test1: "dlkfja",
        },
        {
            id: 9,
            name: "Tether",
            test1: "dlkfja",
        },
        {
            id: 10,
            name: "Tether",
            test1: "dlkfja",
        },
    ];
    return (
        <div className='rounded-xl h-full w-[20rem] scr bg-white shadow-sm'>
            <span className='shadow-lg h-fit flex w-full font-bold justify-center p-2 text-xl border-gray-300 border-b-2 mb-4'>Crypto Market Cap</span>
            <ul className='flex flex-col h-full overflow-y-scroll'>
                {itemlist.map(({ id, name, test1 }) => (
                    <span key={id} className='flex p-3 pr-10 border-b-2 justify-between'>
                        <span className='font-bold text-1xl text-gray-700 w-fit'>
                            {name}<br/>
                            test
                        </span>
                        <span className=' my-auto'>
                            {test1}
                        </span>
                    </span>
                ))}

            </ul>

        </div>
    )
}

export default MarketCap