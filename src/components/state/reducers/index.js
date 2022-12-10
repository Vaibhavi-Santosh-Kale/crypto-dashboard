import { combineReducers } from "redux"
import {marketReducer} from "./maketCap"

const rootReducer = combineReducers({
    marketCap:marketReducer
})

export default rootReducer