import {ISMARKETLOADING} from "../../constants/actionTypes";


const STATE=true;

export const marketloadingreducer = (state = STATE, action)=>
{
    switch (action.type)
    {
        case ISMARKETLOADING:
            {
             return state= action.payload;
            }
        default:
            {
                return state;
            }
    }
}