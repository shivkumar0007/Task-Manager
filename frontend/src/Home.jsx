import React from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Top_DashboardCard from "./component/Top_DashboardCard";
import Right_sidebar from "./component/Right_sidebar";
import TaskBoard from "./component/TaskBoard";
import All_TaskBoard from "./component/All_TaskBoard";

const Home = () => {
  return (
     <>
      <TaskBoard />
      <All_TaskBoard />
    </>
  );
};

export default Home;
