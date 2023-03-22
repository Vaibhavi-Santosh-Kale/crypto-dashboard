import React from "react";
import MarketCap from "./MarketCap/MarketCap";
import Search from "./Search/Search";
import CurrencySelector from "./CurrencySelector/CurrencySelector";
import Portfolio from "./Portfolio/Portfolio";
import Exchange from "./Exchange/Exchange";
import ChartComponent from "./Chart/ChartComponent";
import { useSelector } from "react-redux";



function Content() {
  const isDark = useSelector((store) => store.themereducer);
  return (
    <>
      <div
        className={`h-[calc(100vh-60px)] sm:h-fit sm:w-full w-screen sm:p-8 md:p-12 xl:p-14 2xl:p-16 lg:p-16 min-w-fit ${isDark ? "bg-black" : "bg-white"
          }`}
      >
        <div
          className={`grid grid-flow-col select-none rounded-2xl ${isDark ? "bg-gray-800" : "bg-[#fafbff]"
            }  h-full w-full p-6`}
        >
          <div className="grid grid-flow-col grid-col-12 gap-4 h-full overflow-hidden">
            <div className="grid col-span-8 md:col-span-6 lg:col-span-6 h-full">
              <div className="grid grid-flow-row grid-rows-12 gap-4 ">
                <div className="grid grid-flow-col grid-cols-12 gap-4 h-fit">
                  <div className="grid col-span-1">
                    <CurrencySelector />
                  </div>
                  <div className="grid col-span-11">
                    <Search />

                  </div>
                </div>
                <div className="grid grid-flow-col grid-cols-1">
                  <ChartComponent />
                </div>
                <div className="grid grid-flow-col grid-cols-2 gap-4">
                  <div className="h-full">
                    <Portfolio />
                  </div>
                  <div className="h-full">
                    <Exchange />
                  </div>
                </div>

              </div>
            </div>
            <div className="grid col-span-4 overflow-scroll w-[100%]">
              <MarketCap />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Content;
