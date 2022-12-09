import {UPDATE_MARKET_CAP} from "../../constants/actionTypes"

const INIT_STATE = [];

const marketReducer = (state = INIT_STATE ,action)=>{
    switch (action.type){
        case UPDATE_MARKET_CAP:
            {
                return [...INIT_STATE, action.payload];
            }
        default:
            {
                return state;
            }
    }
}