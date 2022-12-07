import React from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function Dashboard() {
  return (
    <>
      <Navbar />

      <Portfolio />

      <Navbar />
      <Content />
    </>
  );
}

export default Dashboard;
