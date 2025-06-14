import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="bg-[#F4F4F4]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
