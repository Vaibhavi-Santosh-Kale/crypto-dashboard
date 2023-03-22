import React from "react";
import logo from "../assets/logo/almalogo.png";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { changetheme } from "./state/actions/theme";

function Navbar() {
  const isDark = useSelector((store) => store.themereducer);
  const dispatch = useDispatch();
  return (
    <div
      className={`flex ${
        isDark
          ? "bg-gray-800 text-white border-gray-600"
          : "bg-white text-black"
      }  select-none h-[60px] w-full shadow-xl justify-between items-center border-b-2  pr-4`}
    >
      <div className=" flex  items-center">
        <img src={logo} alt="logo" className="p-4 w-36 h-fit hover ml-6" />
        <span className="sm:hidden border-2 border-gray-300 text-sm p-2 ml-4 w-fit hover:cursor-default select-none ">
          Capstone Project - Cryptocurrency Dashboard
        </span>
      </div>
      <div
        className="h-fit w-fit"
        onClick={() => {
          dispatch(changetheme());
        }}
      >
        {isDark === true ? (
          <MdLightMode size={30} color="" />
        ) : (
          <MdNightlight size={30} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
