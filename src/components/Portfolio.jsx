import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Portfolio = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-md w-full">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Portfolio</h1>
          <div className="flex items-center">
            <h4 className="text-sm font-light">Total Value</h4>
            <span className="text-xl font-bold"> $1000</span>
          </div>
        </div>
        <div className="">
          {/* Pie Cart */}
          <Pie
            data={{
              labels: ["Vaibhavi", "Satyam", "Ankit", "Tarun", "Arvind"],
              datasets: [
                {
                  label: "PortFolio",
                  data: [400, 250, 350, 200, 300],
                  backgroundColor: [
                    "#14C38E",
                    "rgb(54, 162, 235)",
                    "rgb(255, 99, 132)",
                    "rgb(255, 165, 0)",
                    "rgb(255, 120, 255)",
                  ],
                  borderColor: [
                    "#14C38E",
                    "rgb(54, 162, 235)",
                    "rgb(255, 99, 132)",
                    "rgb(255, 165, 0)",
                    "rgb(255, 120, 255)",
                  ],
                  borderWidth: 2,
                },
              ],
            }}
            plugins={[]}
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

                datalabels: {
                  display: true,
                  color: "white",
                  align: "center",
                  padding: {
                    right: 2,
                  },
                  labels: {
                    title: {
                      font: {
                        weight: "bold",
                        size: 18,
                      },
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
