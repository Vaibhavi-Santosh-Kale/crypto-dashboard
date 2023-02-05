import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import { Chart as ChartJS, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(...registerables);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "right",
      labels: {
        pointStyleWidth: 10,
        usePointStyle: true,
        pointStyle: "circle",
        padding: 20,
      },
    },
  },
};



function Portfolio() {
  const isDark = useSelector((state) => state.themereducer);
  const port = useSelector((state) => state.portfolio_reducer);
  // const price = useSelector((state)=>state.marketCap);
  const lab = port.map(({ name }) => name);
  const ser = port.map(
    ({ name, amount }) =>
      // (((price.find((data)=>data.name===name))).current_price)*amount
      amount
  );

  const [totalVolume, setTotalVolume] = useState("");
  const [data, setData] = useState({
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        data: [],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether%2Cethereum%2Cbitcoin&order=market_cap_desc`;
      const labelSet = [];
      const dataSet1 = [];
      await fetch(url)
        .then((data) => {
          // console.log("Api data", data)
          const res = data.json();
          return res;
        })
        .then((res) => {
          // console.log("ressss", res)
          for (const val of res) {
            // total_value += val.current_price;
            dataSet1.push(val.current_price);

            labelSet.push(val.name);
          }
          // console.log("dataset1" ,dataSet1)
          setData({
            labels: labelSet,
            datasets: [
              {
                label: [],
                data: dataSet1,
                backgroundColor: ["#0077b6", "#ef476f", "#00afb9"],
                borderColor: ["white"],
                borderWidth: 0,
                hoverOffset: 10,
                hoverBorderWidth: 4,
              },
            ],
          });
          // console.log("arrData", dataSet1)
          setTotalVolume(
            dataSet1.reduce((partialSum, a) => partialSum + a, 0).toFixed(0)
          );
        })
        .catch((e) => {
          // console.log("error", e)
        });
    };
    fetchData();
  }, []);

  return (
    <div
      className={`flex flex-col h-full w-full rounded-lg ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } p-4 gap-2`}
    >
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <div className="flex items-center">
          <h4 className="text-sm font-light">${totalVolume}</h4>
        </div>
        <span>
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "usd",
          }).format(totalVolume)}
        </span>
      </div>
      <div className="piechart" style={{ width: "95%", height: "100%" }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
export default Portfolio;
