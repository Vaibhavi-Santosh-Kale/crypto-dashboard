import React from "react";
import { useSelector } from "react-redux";
// import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./Portfolio.css";

const Portfolio = () => {
  const isDark = useSelector((state) => state.themereducer);
  const data=useSelector((state)=>state.portfolio_reducer);
  const lab=data.map(({name})=>(name));
  const ser=data.map(({amount})=>(amount));

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
        series={ser}
        options={{
          noData: { text: "Empty Data" },
          labels: lab,
          dataLabels: {
            style: {
              colors: ['#0a0a0a']
            }
          }
          
        }}
      ></Chart>
    </div>
  );
};

export default Portfolio;
