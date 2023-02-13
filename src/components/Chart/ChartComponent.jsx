import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { useSelector } from "react-redux";
import Button from "../Button";
import { MdDateRange } from "react-icons/md";

ChartJS.register(...registerables);

function ChartComponent() {
  const isDark = useSelector((state) => state.themereducer);

  return (
    <div
      className={`flex flex-col h-full w-full rounded-lg ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } p-4 gap-2`}
    >
      <div className="h-12 flex flex-row items-center justify-center gap-5">
        <div className="h-full w-full flex flex-row gap-3 justify-end items-center">
          <Button value="1D"></Button>
          <Button value="1W"></Button>
          <Button value="1M"></Button>
          <Button value="6M"></Button>
          <Button value="1Y"></Button>
          <Button value={<MdDateRange size={24} color="slate" />} />
        </div>
        <div className="h-full w-full flex flex-row items-center justify-around">
          <div className="h-full outline outline-1 outline-gray-500 rounded-lg flex items-center justify-center">
            i am for cryptocurrency type selection
          </div>
          <div className="h-full outline outline-1 outline-gray-500 rounded-lg flex items-center justify-center">
            i am for chart type selection
          </div>
        </div>
      </div>
      <div className="h-full">
        Yes i am a chart component its still on deveploment
      </div>
    </div>
  );
}

export default ChartComponent;
