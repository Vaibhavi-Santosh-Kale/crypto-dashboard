import { SEARCHCHANGE } from "../../constants/actionTypes";

export const search = (data) => {
  return {
    type: SEARCHCHANGE,
    payload: data,
  };
};
