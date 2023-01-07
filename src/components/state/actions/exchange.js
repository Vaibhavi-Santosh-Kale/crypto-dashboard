import { SELLSTATE } from "../../constants/actionTypes";
import { BUYSTATE } from "../../constants/actionTypes";


export const buy_state = (data)=>{
    return{
        type:BUYSTATE,
        payload:data,
    }
}

export const sell_state = (data)=>{
    return{
        type:SELLSTATE,
        payload:data,
    }
}