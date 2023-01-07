import { PORTFOLIOSTATUS,PORTFOLIOUPDATE } from "../../constants/actionTypes";

const portfolio = [{"name":"USD","amount":1000},{"name":"Ethereum","amount":200},{"name":"Bitcoin","amount":10}];

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