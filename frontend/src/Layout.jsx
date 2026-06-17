import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Right_sidebar from "./component/Right_sidebar";
import Top_DashboardCard from "./component/Top_DashboardCard";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex flex-1 overflow-hidden">
          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <Top_DashboardCard />

            {/* Sirf ye scroll hoga */}
            <div className="flex-1 overflow-y-auto hide-scrollbar">
              <Outlet />
            </div>
          </div>

          <Right_sidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;