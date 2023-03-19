import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buy_state, sell_state } from "../state/actions/exchange";
// import { portfolio_update } from "../state/actions/portfolio";
import { fetchCoinList } from "../../redux/action";
import "./Exchange.css";

function Exchange() {
  // const portfolio = useSelector((state) => state.portfolio_reducer);
  const isDark = useSelector((state) => state.themereducer);
  const sell = useSelector((state) => state.sell_reducer);
  const buy = useSelector((state) => state.buy_reducer);
  const buyList = useSelector((state) => state.marketCap);
  const sellList = useSelector((state) => state.marketCap);
  const exchangeData = useSelector((state) => state.exchange);
  const dispatch = useDispatch();

  const [text1, settext1] = useState("");
  const [value1, setvalue1] = useState(1);
  const [value2, setvalue2] = useState(1);
  const [text2, settext2] = useState(1);
  const [units, setUnits] = useState([]);
  const coin = exchangeData.coinList.rates;

  console.log("convert", coin);

  useEffect(() => {
    if (exchangeData.coinList.length === 0) {
      dispatch(fetchCoinList());
    }
  }, []);

  const convert = () => {
    const unit = Object.values(coin).find((unit) => {
      return unit.value == value2;
    });

    console.log("value", Object.values(coin));
    setUnits(unit.unit);
    let result = (value2 / value1) * text1;
    settext2(result);
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
                className="bg-slate-200 w-36 h-8 text-center text-lg font-semibold rounded-md list-item"
                //value={sell}
                onChange={(e) => setvalue1(e.target.value)}
              >
                <option value="" selected="true" hidden>
                  Select
                </option>
                {coin &&
                  Object.values(coin).map((d, k) => (
                    <option key={k} value={d.value} className="text-gray-600">
                      {d.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="h-full w-fit mx-2">
              <input
                type="number"
                min="0"
                value={text1 || ""}
                onChange={(e) => settext1(e.target.value)}
                disabled={sell === "Select"}
                placeholder={"Enter Amount"}
                className="w-full h-full rounded-md border-2 pl-3"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h4 className="text-green-600 font-semibold text-xl h-fit my-auto w-[25%] justify-center pl-[10%]">
              Buy
            </h4>
            <div className="flex w-[30%]">
              <select
                name="currency"
                className="bg-slate-200 w-36 h-8 text-center text-lg font-semibold rounded-md list-item"
                //value={buy}
                onChange={(e) => setvalue2(e.target.value)}
              >
                <option value="" selected="true" hidden>
                  Select
                </option>
                {/* {buyList.map(
({ name }) =>
sell !== name && (
<option key={name} value={name}>
{name}
</option>
)
)} */}
                {coin &&
                  Object.values(coin).map((d, k) => (
                    <option key={k} value={d.value} className="text-gray-600">
                      {d.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="h-full w-fit">
              <div className="w-full h-full text-green-400 mx-2">
                {parseFloat(text2).toFixed(2)} {units}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-full items-center">
          <button
            className="hover:scale-105 duration-300 bg-gradient-to-tr from-cyan-400 to-blue-600 via-cyan-500 rounded-lg text-lg font-bold h-12 w-32"
            // onClick={()=>dispatch(portfolio_update({name:buy,amount:5}))}
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
