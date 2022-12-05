import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins, reset } from "../features/coins/coinSlice";

const Navbar = () => {
  const [currency, setCurrency] = useState("usd");
  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  const dispatch = useDispatch();
  //using the coins data from store
  const { coins, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.coins
  );

  //dipatching to get various coins and their data
  useEffect(() => {
    dispatch(fetchCoins(currency));
    console.log(coins);
    return () => {
      dispatch(reset());
    };
  }, [dispatch, currency]);

  return (
    <div className="flex justify-between pb-4">
      <div className="flex items-center">
        <label htmlFor="currency" className="sr-only">
          Currency
        </label>
        <select
          id="currency"
          name="currency"
          onChange={handleChange}
          value={currency}
          className="bg-white w-20 h-8 text-center text-lg font-semibold rounded-md list-item"
        >
          <option value="usd" className="hover:bg-gray-100 hello">
            <li className="hover:bg-slate-500">USD</li>
          </option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>
      </div>
      <div className="flex">
        <input
          placeholder="Search By Coins"
          className="px-4 w-full rounded-md"
        />
      </div>
    </div>
  );
};

export default Navbar;
