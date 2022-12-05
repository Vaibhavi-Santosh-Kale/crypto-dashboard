import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import coinService from "./coinService";

//gettings from local storage
const coins = JSON.parse(localStorage.getItem("currency"));
const initialState = {
  coins: coins ? coins : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

//fetch data from api- various coin data
export const fetchCoins = createAsyncThunk(
  "coins/fetchCoins",
  async (currency, thunkAPI) => {
    try {
      return await coinService.fetch(currency);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.coins = action.payload;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload;
        state.coins = null;
      });
  },
});

export const { reset } = coinSlice.actions;
export default coinSlice.reducer;
