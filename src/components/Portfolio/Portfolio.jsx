import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import { Chart as ChartJS, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
ChartJS.register(...registerables);

function Portfolio() {
  const isDark = useSelector((state) => state.themereducer);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animations: {
      animationScale: true,
    },
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyleWidth: 10,
          pointStyle: "circle",
          padding: 20,
        },
      },
    },
  };

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
      const dataSet = [];
      await fetch(url)
        .then((data) => {
          const res = data.json();
          return res;
        })
        .then((res) => {
          for (const val of res) {
            dataSet.push(val.current_price);

            labelSet.push(val.name);
          }

          setData({
            labels: labelSet,
            datasets: [
              {
                label: [],
                data: dataSet,
                backgroundColor: ["#0077b6", "#ef476f", "#00afb9"],
                borderColor: ["white"],
                borderWidth: 0,
                hoverOffset: 10,
                hoverBorderWidth: 4,
              },
            ],
          });

          setTotalVolume(
            dataSet.reduce((partialSum, a) => partialSum + a, 0).toFixed(0)
          );
        })
        .catch((e) => {});
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
          <h1 className="text-xl font-bold">Total value: </h1>
        </div>
        <span>
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "usd",
          }).format(totalVolume)}
        </span>
      </div>
      <div className="piechart h-full w-full">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
export default Portfolio;
