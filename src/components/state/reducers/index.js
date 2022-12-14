import { combineReducers } from "redux"
import {updatecurr} from "./updatecurrency"
import {marketReducer} from "./maketCap"
import { marketloadingreducer } from "./marketloadingreducer"
import {themereducer} from "./theme"
import {searchreducer} from "./search"

const rootReducer = combineReducers({
    marketCap:marketReducer,
    updatecurr,
    marketloadingreducer,
    themereducer,
    searchreducer
})

export default rootReducer