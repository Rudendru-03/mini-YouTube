import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideBar className="col-span-1 /* shadow-lg */" />
      <Outlet />
    </div>
  );
};

export default Body;
