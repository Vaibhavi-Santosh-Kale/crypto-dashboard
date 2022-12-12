import React from 'react'
import "./CurrencySelector.css"
import { useSelector,useDispatch } from 'react-redux'
import updatecurr from '../state/actions/updatecurrency';


function CurrencySelector() {

    const list =["inr",
    "eth",
    "ltc",
    "bch",
    "bnb",
    "eos",
    "xrp",
    "xlm",
    "link",
    "dot",
    "yfi",
    "usd",
    "aed",
    "ars",
    "aud",
    "bdt",
    "bhd",
    "bmd",
    "brl",
    "cad",
    "chf",
    "clp",
    "cny",
    "czk",
    "dkk",
    "eur",
    "gbp",
    "hkd",
    "huf",
    "idr",
    "ils",
    "jpy",
    "krw",
    "kwd",
    "lkr",
    "mmk",
    "mxn",
    "myr",
    "ngn",
    "nok",
    "nzd",
    "php",
    "pkr",
    "pln",
    "rub",
    "sar",
    "sek",
    "sgd",
    "thb",
    "try",
    "twd",
    "uah",
    "vef",
    "vnd",
    "zar",
    "xdr",
    "xag",
    "xau",
    "bits",
    "sats",
    ];
    const state = useSelector((store) => store.updatecurr);
    const dispatch = useDispatch();
    console.log(state);
    return (
        <select value={state} onChange={(event)=>{            
            dispatch(updatecurr(event.target.value))}}
            className='group flex justify-between bg-white rounded-lg shadow-sm p-2 w-full uppercase'>
            {/* <option value="inr">INR</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option> */}
            {list.map((item)=>
                <option className='p-2 w-1' value={item}>{item}</option>)}
        </select>
    )
}
export default CurrencySelector