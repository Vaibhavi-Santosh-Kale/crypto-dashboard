import { ISMARKETLOADING } from "../../constants/actionTypes";

const marketloadchange = (data) => {
  return {
    type: ISMARKETLOADING,
    payload: data,
  };
};

export default marketloadchange;
