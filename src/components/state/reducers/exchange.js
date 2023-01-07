import { SELLSTATE,BUYSTATE } from "../../constants/actionTypes";

const INIT_SELLSTATE = "USD";
const INIT_BUYSTATE = "Select";


export const sell_reducer = (STATE= INIT_SELLSTATE,action)=>{
    switch (action.type){
        case SELLSTATE:
            {
                return STATE = action.payload;
            }
        default:
            {
                return STATE;
            }
    }
}

export const buy_reducer = (STATE= INIT_BUYSTATE,action)=>{
    switch (action.type){
        case BUYSTATE:
            {
                return STATE = action.payload;
            }
        default:
            {
                return STATE;
            }
    }
}