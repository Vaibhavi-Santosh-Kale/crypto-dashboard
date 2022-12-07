import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function Dashboard() {
  return (
    <>
      <Navbar />
      <Home />
      <Portfolio />
    </>
  );
}

export default Dashboard;
