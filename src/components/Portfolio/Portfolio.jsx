import React from "react";
import Chart from "react-apexcharts";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="bg-white ">
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
        series={[23, 43, 50, 65]}
        options={{
          noData: { text: "Empty Data" },
          labels: ["Bitcoin", "Ethereum", "Tether", "Polygon"],
        }}
      ></Chart>
    </div>
  );
};

export default Portfolio;
