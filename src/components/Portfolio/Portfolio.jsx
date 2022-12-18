import React from "react";
import Chart from "react-apexcharts";

const Portfolio = () => {
  return (
    <div>
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
