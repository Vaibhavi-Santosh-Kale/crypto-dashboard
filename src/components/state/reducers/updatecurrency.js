import { SELECTCURRENCY } from "../../constants/actionTypes"


const INITCOIN = "inr";

export const updatecurr = (state = INITCOIN, action) => {
    switch (action.type)
    {
        case SELECTCURRENCY:
            {
                return state=action.payload;
            }
        default:
        {
            return state;
        }
    }
}