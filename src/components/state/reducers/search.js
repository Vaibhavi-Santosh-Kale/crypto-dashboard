import { SEARCHCHANGE } from "../../constants/actionTypes"


const STATE = "";

export const searchreducer = (state = STATE, action) => {
    switch (action.type) {
        case SEARCHCHANGE:
            {
                return state = action.payload;
            }
        default:
            {
                return state;
            }
    }

}