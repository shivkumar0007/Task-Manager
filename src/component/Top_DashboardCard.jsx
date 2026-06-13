import React from "react";

const Top_DashboardCard = () => {
  return (
    <div className="flex justify-around gap-4 mt-5 px-4 pb-2">
      <div className="bg-white rounded-xl shadow-md p-5 w-1/5">
        <h3 className="text-gray-500 text-sm">Total Tasks</h3>
        <p className="text-3xl font-bold mt-2">27</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-5 w-1/5">
        <h3 className="text-gray-500 text-sm">Completed</h3>
        <p className="text-3xl font-bold mt-2 text-green-600">2</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-5 w-1/5">
        <h3 className="text-gray-500 text-sm">In Progress</h3>
        <p className="text-3xl font-bold mt-2 text-blue-600">28</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-5 w-1/5">
        <h3 className="text-gray-500 text-sm">Pending</h3>
        <p className="text-3xl font-bold mt-2 text-orange-500">57</p>
      </div>
    </div>
  );
};

export default Top_DashboardCard;