import { combineReducers } from "redux"
import {updatecurr} from "./updatecurrency"
import {marketReducer} from "./maketCap"
import { marketloadingreducer } from "./marketloadingreducer"

const rootReducer = combineReducers({
    marketCap:marketReducer,
    updatecurr,
    marketloadingreducer

})

export default rootReducer