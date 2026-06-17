import React from "react";
import Notification from "../icon/Notification";
import AddTask from "../icon/AddTask";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 bg-white">
      <div className="ml-10 font-bold text-xl">Dashboard</div>
      <div className="flex gap-5 mr-10">
        <div>
          <SearchBar height="25px" width="300px" />
        </div>
        <div><Notification height={22} width={22} count={1} /></div>
        <div className="flex gap-2"><AddTask  height={22} width={22} /> <span className="text-blue-400">NewTask</span></div>
      </div>
    </div>
  );
};

export default Navbar;
