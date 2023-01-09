import React from "react";
import "./Portfolio.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend, Title);
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
      <div className="piechart" style={{ width: "85%", height: "100%" }}>
        <Pie
          data={{
            datasets: [
              {
                data: [10, 20, 30, 40],
                backgroundColor: ["red", "blue", "Orange", "green"],
              },
            ],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: ["Tether", "Luna", "Ethereum", "Bitcoin"],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: "right",
                labels: {
                  usePointStyle: true,
                  pointStyle: "circle",
                  // boxWidth: 5
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
export default Portfolio;
