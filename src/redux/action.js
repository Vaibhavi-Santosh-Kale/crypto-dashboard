import axios from "axios";
import actionTypes from "./types";

// exchange rate action
export const fetchCoinList = () => {
  return (dispatch) => {
    axios
      .get("https://api.coingecko.com/api/v3/exchange_rates")
      .then((response) => {
        const data = response.data;
        dispatch({
          type: actionTypes.EXCHANGE_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({
          type: actionTypes.EXCHANGE_ERROR,
          payload: errorMsg,
        });
      });
  };
};
