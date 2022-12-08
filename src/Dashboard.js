import React from "react";
import MarketCap from "./components/MarketCap";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Exchange from "./components/Exchange";



function Dashboard() {
  return (
    <>
      <Navbar/>
      <MarketCap/>
      <Portfolio/>
      <Exchange/>
    </>
  );
}

export default Dashboard;
