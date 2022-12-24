import React from "react";
import { useSelector } from "react-redux";
// import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./Portfolio.css";

const Portfolio = () => {
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
      <Chart
        type="pie"
        width={400}
        height={550}
        series={[23, 43, 50, 52, 45]}
        options={{
          noData: { text: "Empty Data" },
          labels: ["Bitcoin", "Ethereum", "Tether", "Polygon", "Cardano"],
        }}
      ></Chart>
    </div>
  );
};

export default Portfolio;
