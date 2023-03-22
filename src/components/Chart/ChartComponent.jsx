import { useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import Button from "../Button";
import axios from "axios";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";

function ChartComponent() {
  const isDark = useSelector((state) => state.themereducer);
  const coinList = useSelector((state) => state.marketCap);
  const [historicData, setHistoricData] = useState([]);
  const [chartSelector, setChartSelector] = useState("line");
  const [days, setDays] = useState("1");
  const currencySelector = useSelector((state) => state.updatecurr);
  const [cointofetch, setCoinToFetch] = useState("bitcoin");
  console.log(cointofetch);

  const fetchHistoricData = async () => {
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${cointofetch}/market_chart?vs_currency=${currencySelector}&days=${days}`
      )
      .then((res) => {
        setHistoricData(res.data.prices);
        console.log(historicData);
      })
  };

  useEffect(() => {
    fetchHistoricData();
  }, [cointofetch, currencySelector, days]);

  return (
    <div
      className={`flex flex-col h-full w-full rounded-lg ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } p-4 gap-2`}
    >
      <div className="h-12 flex flex-row items-center justify-center gap-5">
        <div className="h-full w-full flex flex-row gap-3 justify-end items-center">
          <Button value="1D" day={setDays} dayVal={1}></Button>
          <Button value="1W" day={setDays} dayVal={7}></Button>
          <Button value="1M" day={setDays} dayVal={30}></Button>
          <Button value="6M" day={setDays} dayVal={180}></Button>
          <Button value="1Y" day={setDays} dayVal={365}></Button>
        </div>
        <div className="h-full w-full flex flex-row items-center justify-around">
          <select
            className={`group flex justify-between ${
              isDark ? "bg-black text-white" : "bg-white"
            } rounded-lg shadow-sm p-2 w-fit uppercase outline-none`}
            onChange={(event) => {
              setCoinToFetch(event.target.value);
            }}
          >
            {coinList.map(({ id, name }) => (
              <option key={id} value={id}>
                {" "}
                {name}
              </option>
            ))}
          </select>
          <select
            className={`group flex justify-between ${
              isDark ? "bg-black text-white" : "bg-white"
            } rounded-lg shadow-sm p-2 w-fit uppercase outline-none`}
            onChange={(event) => {
              setChartSelector(event.target.value);
              console.log(chartSelector);
            }}
          >
            <option selected value="line">
              Line
            </option>
            <option value="bar">Bar</option>
          </select>
        </div>
      </div>
      <div className="h-[calc(100%-55px)]">
        {chartSelector === "line" ? (
          <Line
            data={{
              labels: historicData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in ${
                    cointofetch.charAt(0).toUpperCase() + cointofetch.slice(1)
                  }`,
                  borderColor: "#1DEE2A",
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,

              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
        ) : (
          <Bar
            data={{
              labels: historicData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in ${
                    cointofetch.charAt(0).toUpperCase() + cointofetch.slice(1)
                  }`,
                  fillColor: [
                    "rgba(0,10,220,0.5)",
                    "rgba(220,0,10,0.5)",
                    "rgba(220,0,0,0.5)",
                    "rgba(120,250,120,0.5)",
                  ],
                  strokeColor: "rgba(220,220,220,0.8)",
                  highlightFill: "rgba(220,220,220,0.75)",
                  highlightStroke: "rgba(220,220,220,1)",
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true,

              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ChartComponent;
