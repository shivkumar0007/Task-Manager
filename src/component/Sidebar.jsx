import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div className="p-6 border-b">
          <h1 className="text-3xl font-bold text-blue-600">TaskFlow</h1>
        </div>

        <div className="p-4 ">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block px-4 py-3 rounded-xl cursor-pointer ${
                isActive
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : "hover:bg-gray-100"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/mytask"
            className={({ isActive }) =>
              `block px-4 py-3 rounded-xl cursor-pointer ${
                isActive
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : "hover:bg-gray-100"
              }`
            }
          >
            My Tasks
          </NavLink>

          <div className="px-4 py-3 rounded-xl hover:bg-gray-100 cursor-pointer ">
            Calendar
          </div>

          <NavLink
            to="/taskboard"
            className={({ isActive }) =>
              `block px-4 py-3 rounded-xl cursor-pointer ${
                isActive
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : "hover:bg-gray-100"
              }`
            }
          >
            Task Board
          </NavLink>

         <NavLink
            to="/setting"
            className={({ isActive }) =>
              `block px-4 py-3 rounded-xl cursor-pointer ${
                isActive
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : "hover:bg-gray-100"
              }`
            }
          >
            Setting
          </NavLink>
        </div>
      </div>




      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h3 className="font-medium">John Doe</h3>
            <p className="text-sm text-gray-500">Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
