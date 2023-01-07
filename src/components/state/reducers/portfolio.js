import { PORTFOLIOSTATUS,PORTFOLIOUPDATE } from "../../constants/actionTypes";

const portfolio = [{name:"USD Coin",amount:1000}];

export const portfolio_reducer = (STATE=portfolio ,action)=>{
    switch (action.type){
        case PORTFOLIOSTATUS:
            {
                return STATE;
            }
        case PORTFOLIOUPDATE:
            {
                return STATE=STATE.push(action.payload);
            }
        default:
            {
                return STATE;
            }
    }
}