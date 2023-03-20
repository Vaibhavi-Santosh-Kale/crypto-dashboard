import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";
import { useSelector } from "react-redux";
import Button from "../Button";
import { MdDateRange } from "react-icons/md";
import axios from "axios";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";

// ChartJS.register(...registerables);





function ChartComponent() {
  const isDark = useSelector((state) => state.themereducer);
  const coinList = useSelector((state) => state.marketCap);
  const [historicData, setHistoricData] = useState([]);
  const [chartSelector, setChartSelector] = useState("line");
  const [days, setDays] = useState(1);
  const currencySelector = useSelector((state) => state.updatecurr);
  const [cointofetch, setCoinToFetch] = useState("Bitcoin");
  console.log(cointofetch);


  // const { currency } = CryptoState();

  const fetchHistoricData = async () => {
    await axios.get(`https://api.coingecko.com/api/v3/coins/${cointofetch}/market_chart?vs_currency=${currencySelector}&days=${days}`).then((res) => {
      setHistoricData(res.data.prices);
      console.log(historicData)
    }).catch((error) => {
      setTimeout(() => {
        fetchHistoricData();
      }, 20000);
      console.log(error, "api request limit exceed");
    });
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cointofetch, currencySelector, days]);


  return (
    <div
      className={`flex flex-col h-full w-full rounded-lg ${isDark ? "bg-black text-white" : "bg-white text-black"
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
          <select className="h-full outline outline-1 outline-gray-500 rounded-lg flex items-center justify-center" onChange={(event) => { setCoinToFetch(event.target.value) }}>
            {coinList.map(({ id, name }) => (
              <option key={id} value={name}>  {name}</option>
            ))}
          </select>
          <select className="h-full outline outline-1 outline-gray-500 rounded-lg flex items-center justify-center" onChange={(event) => {
            setChartSelector(event.target.value); console.log(chartSelector)
          }}>
            <option selected value="line">Line</option>
            <option value="bar">Bar</option>

          </select>
        </div>
      </div>
      <div className="h-[calc(100%-55px)]">
        {/* Yes i am a chart component its still on deveploment */}


        {chartSelector === "line" ? <Line
          data={{
            labels: historicData.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicData.map((coin) => coin[1]),
                label: `Price ( Past ${days} Days ) in `,
                borderColor: "#1DEE2A",
              },
            ],
          }}
          options={{

            maintainAspectRatio: false,


            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
          : <Bar
            data={{
              labels: historicData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in `,
                  fillColor: ["rgba(0,10,220,0.5)", "rgba(220,0,10,0.5)", "rgba(220,0,0,0.5)", "rgba(120,250,120,0.5)"],
                  strokeColor: "rgba(220,220,220,0.8)",
                  highlightFill: "rgba(220,220,220,0.75)",
                  highlightStroke: "rgba(220,220,220,1)",
                },
              ],
            }}
            options={{

              maintainAspectRatio: false,


              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />}


      </div>
    </div>
  );
}

export default ChartComponent;



