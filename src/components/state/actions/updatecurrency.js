import { SELECTCURRENCY } from "../../constants/actionTypes";

const updatecurr = (data)=>{
    return{
        type:SELECTCURRENCY,
        payload:data
    }
}


export default updatecurr;