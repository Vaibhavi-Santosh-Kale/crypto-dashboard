import { CAP } from "../../constants/actionTypes"

const updatecap = (data) => {
    return{
        type:CAP,
        payload:data
    }
}

export default updatecap;