import React from "react";
import MarketCap from "./MarketCap/MarketCap";
import Search from "./Search/Search";
import CurrencySelector from "./CurrencySelector/CurrencySelector";
import Portfolio from "./Portfolio";
import Exchange from "./Exchange";
import ChartComponent from "./Chart/ChartComponent";

function Content() {
  return (
    <>
      <div className="h-[calc(100vh-60px)] w-screen p-12">
        <div className="flex flex-row gap-6 select-none border-b-2 rounded-2xl bg-[#fafbff] h-full w-full p-8 ">
          <div className="w-[78%] h-full flex flex-col gap-6">
            <div className="flex gap-6 h-[45px] text-xl">
              <div className="w-1/12">
                <div className="w-full h-full">
                  <CurrencySelector />
                </div>
              </div>
              <div className="w-11/12">
                <Search />
              </div>
            </div>
            <div className="h-[calc(100%-45px)] w-full flex flex-col gap-6">
              <div className="flex h-2/3 justify-center items-center bg-white rounded-lg">
                <ChartComponent />
              </div>

              <div className="flex h-1/3 w-full flex-row gap-6">
                <div className="flex h-full w-1/2">
                  <Portfolio />
                </div>
                <div className="flex h-full w-1/2">
                  <Exchange />
                </div>
              </div>
            </div>
          </div>
          <div>
            <MarketCap />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
