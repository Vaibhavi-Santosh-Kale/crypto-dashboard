import { combineReducers } from "redux"
import {updatecurr} from "./updatecurrency"
import {marketReducer} from "./maketCap"
import { marketloadingreducer } from "./marketloadingreducer"
import {themereducer} from "./theme"
import {searchreducer} from "./search"
import { portfolio_reducer } from "./portfolio"
// import { buy_reducer,sell_reducer } from "./exchange"
import exchangeReducer from './exchangeReducer'
import defaultReducer from "./defaultRedcuers"

const rootReducer = combineReducers({
    marketCap:marketReducer,
    updatecurr,
    marketloadingreducer,
    themereducer,
    searchreducer,
    portfolio_reducer,
    default : defaultReducer,
    exchange : exchangeReducer,  
})

export default rootReducer