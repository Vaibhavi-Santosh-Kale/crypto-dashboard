import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoinList } from "../state/actions/fetchCoinList";
import "./Exchange.css";

function Exchange() {
  const isDark = useSelector((state) => state.themereducer);
  const sell = useSelector((state) => state.sell_reducer);
  const exchangeData = useSelector((state) => state.exchange);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState("");
  const [sellValue, setSellValue] = useState(1);
  const [buyValue, setBuyValue] = useState(1);
  const [output, setOutput] = useState(1);
  const [units, setUnits] = useState([]);
  const coin = exchangeData.coinList.rates;

  useEffect(() => {
    if (exchangeData.coinList.length === 0) {
      dispatch(fetchCoinList());
    }
  }, []);

  const convert = () => {
    const unit = Object.values(coin).find((unit) => {
      return unit.value == buyValue;
    });

    // console.log("value", Object.values(coin));
    setUnits(unit.unit);
    let result = (buyValue / sellValue) * amount;
    setOutput(result);
  };

  return (
    <>
      <div
        className={`flex flex-col h-full w-full rounded-lg ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        } p-4 gap-2`}
      >
        <div className="text-xl font-bold">Exchange Coins</div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="w-[55%]"></div>
            <div className="h-full w-fit">
              <div className="w-full h-full text-black-100 text-sm">
                Enter Amount:
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h4 className="text-orange-600 font-semibold text-xl h-fit my-auto w-[25%] justify-center pl-[10%]">
              Sell
            </h4>
            <div className="flex w-[30%]">
              <select
                name="currency"
                className={`group flex justify-between ${
                  isDark ? "bg-black text-white" : "bg-slate-200"
                } rounded-lg shadow-sm p-2 w-full uppercase outline-none`}
                onChange={(e) => setSellValue(e.target.value)}
              >
                <option value="" selected="true" hidden>
                  Select
                </option>
                {coin &&
                  Object.values(coin).map((d, k) => (
                    <option key={k} value={d.value}>
                      {d.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className={`h-full w-fit mx-2 `}>
              <input
                type="number"
                min="0"
                value={amount || ""}
                onChange={(e) => setAmount(e.target.value)}
                disabled={sell === "Select"}
                placeholder={"Enter Amount"}
                className={`w-full h-full rounded-md border-2 pl-3 ${
                  isDark ? "bg-black text-white" : "bg-slate-200"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h4 className="text-green-600 font-semibold text-xl h-fit my-auto w-[25%] justify-center pl-[10%]">
              Buy
            </h4>
            <div className="flex w-[30%] ">
              <select
                name="currency"
                className={`group flex justify-between ${
                  isDark ? "bg-black text-white" : "bg-slate-200"
                } rounded-lg shadow-sm p-2 w-full uppercase outline-none`}
                onChange={(e) => setBuyValue(e.target.value)}
              >
                <option value="" selected="true" hidden>
                  Select
                </option>
                {coin &&
                  Object.values(coin).map((d, k) => (
                    <option key={k} value={d.value}>
                      {d.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="h-full w-fit">
              <div className="flex w-full h-full text-green-400 items-center justify-center m-auto px-3">
                {parseFloat(output).toFixed(2)} {units}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-full items-center">
          <button
            className="hover:scale-105 duration-300 bg-gradient-to-tr from-cyan-400 to-blue-600 via-cyan-500 rounded-lg text-lg font-bold h-12 w-32"
            onClick={() => convert()}
          >
            Exchange
          </button>
        </div>
      </div>
    </>
  );
}
export default Exchange;
