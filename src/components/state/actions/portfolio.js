import { PORTFOLIOSTATUS } from "../../constants/actionTypes";
import { PORTFOLIOUPDATE } from "../../constants/actionTypes";

export const portfolio_stat = (data)=>{
    return{
        type:PORTFOLIOSTATUS,
    }
}

export const portfolio_update = (data)=>{
    return{
        type:PORTFOLIOUPDATE,
        payload:data,
    }
}
