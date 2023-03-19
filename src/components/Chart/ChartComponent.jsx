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
  const coinList = useSelector((state)=>state.marketCap)
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  // const { currency } = CryptoState();

  const fetchHistoricData = async () => {
    await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=30`).then((res)=>{setHistoricData(res.data.prices);
    console.log(historicData)});
    
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
          <select className="h-full outline outline-1 outline-gray-500 rounded-lg flex items-center justify-center">
            {coinList.map(({id,name})=>(
              <option key={id} value={name}>  {name}</option>
            ))}
          </select>
          <select className="h-full outline outline-1 outline-gray-500 rounded-lg flex items-center justify-center">
            <option selected value="Line">Line</option>
            <option value="Bar">Bar</option>

          </select>
        </div>
      </div>
      <div className="h-full">
        {/* Yes i am a chart component its still on deveploment */}
        

        <Line
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
                    label: `Price ( Past ${days} Days ) in`,
                    borderColor: "#EEBC1D",
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
        {/* <Bar 
              data={{
                labels: "abc",

                datasets: [
                  {
                    data: 1,
                    label: "test",
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            /> */}
        
            
              {/* {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {setDays(day.value);
                    setflag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))} */}
            
        
      </div>
    </div>
  );
}

export default ChartComponent;



