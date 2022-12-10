import React from 'react'
import "./CurrencySelector.css"
import { useSelector,useDispatch } from 'react-redux'
import updatecurr from '../state/actions/updatecurrency';


function CurrencySelector() {

    const state = useSelector((store) => store.updatecurr);
    const dispatch = useDispatch();
    console.log(state);
    return (
        <select value={state} onChange={(event)=>{
            
            dispatch(updatecurr(event.target.value))}}
            className='group flex justify-between bg-white rounded-lg shadow-sm p-2 w-full'>
            <option value="inr">INR</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>
        </select>
    )
}

export default CurrencySelector