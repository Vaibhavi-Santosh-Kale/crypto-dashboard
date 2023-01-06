import { combineReducers } from "redux"
import {updatecurr} from "./updatecurrency"
import {marketReducer} from "./maketCap"
import { marketloadingreducer } from "./marketloadingreducer"
import {themereducer} from "./theme"
import {searchreducer} from "./search"
import { portfolio_reducer } from "./portfolio"

const rootReducer = combineReducers({
    marketCap:marketReducer,
    updatecurr,
    marketloadingreducer,
    themereducer,
    searchreducer,
    portfolio_reducer
})

export default rootReducer