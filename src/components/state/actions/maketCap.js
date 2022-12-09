import { UPDATE_MARKET_CAP } from "../../constants/actionTypes"

const updatemarket = (caplist) => {
    return{
        type:UPDATE_MARKET_CAP,
        payload:caplist,
    }
}

export default updatemarket;