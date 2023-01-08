import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
// import React, { useState, useEffect } from "react";

import "./Portfolio.css";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function Portfolio() {
  const isDark = useSelector((state) => state.themereducer);
  // const [coinName, setCoinName] = useState([]);
  // const [coinNumber, setCoinNumber] = useState([]);

  // useEffect(() => {
  //   const coinName = [];
  //   const coinNumber = [];
  //   const getCoindata = async () => {
  //     const reqData = await fetch("");
  //     const resData = await reqData.json();
  //     for (let i = 0; i < resData.length; i++) {
  //       coinName.push(resData[i].name);
  //       coinNumber.push(parseInt(resData[i].number));
  //     }
  //     setCoinName(coinName);
  //     setCoinNumber(coinNumber);
  //     //console.log(resData);
  //   };

  //   getCoindata();
  // }, []);
  return (
    <div
      className={`flex flex-col h-full w-full rounded-lg ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } p-4 gap-2`}
    >
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <div className="flex items-center">
          <h4 className="text-sm font-light">Total Value</h4>
          <span className="text-xl font-bold">$1000</span>
        </div>
      </div>
      <Pie
        data={{
          labels: ["Tether", "Ethereum", "Bitcoin"],
          datasets: [
            {
              label: "PortFolio",
              data: [250, 400, 350],
              backgroundColor: [
                "#14C38E",
                "rgb(54, 162, 235)",
                "rgb(255, 99, 132)",
              ],
              borderColor: [
                "#14C38E",
                "rgb(54, 162, 235)",
                "rgb(255, 99, 132)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
}

export default Portfolio;
