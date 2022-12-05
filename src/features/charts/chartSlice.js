import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//setting the tme stamps to local storage
const coinTime = JSON.parse(localStorage.getItem("coinTime"));

//initial state
const initialState = {
  coinTime: coinTime ? coinTime : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

//api for fetching history of particular coin at particular time
const ChartApi = (id, days) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

//fetching the coin timings
export const fetchCoinTime = createAsyncThunk(
  "coinTime/fetchCoinTime",
  async (userData, thunkAPI) => {
    try {
      const { id, days } = userData;
      const { data } = await axios.get(ChartApi(id, days));
      //console.log(data.prices)
      localStorage.setItem("coinTime", JSON.stringify(data.prices));
      return data.prices;
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

export const chartSlice = createSlice({
  name: "coinTime",
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
      .addCase(fetchCoinTime.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCoinTime.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.coinTime = action.payload;
      })
      .addCase(fetchCoinTime.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload;
        state.coinTime = null;
      });
  },
});

export const { reset } = chartSlice.actions;
export default chartSlice.reducer;
