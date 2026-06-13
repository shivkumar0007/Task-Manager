const Task = () => {
  return (
    <div className="flex items-center text-sm bg-white rounded-lg px-4 py-3 mb-2 shadow-sm hover:shadow-md transition">
      <span className="w-1/5 font-medium text-gray-800">
        ⏹️ Design Landing Page
      </span>

      <span className="w-1/5 text-gray-600">
        Website Redesign
      </span>

      <span className="w-1/5">
        <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-xs font-medium">
          High
        </span>
      </span>

      <span className="w-1/5 text-gray-500">
        May 25, 2024
      </span>

      <span className="w-1/5">
        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-xs font-medium">
          To Do
        </span>
      </span>
    </div>
  );
};





import React from "react";
const All_TaskBoard = () => {
  return (
    <div className="bg-white w-[calc(100vw-560px)] rounded-xl shadow p-4 ml-6 mt-3">
     
      <div className="flex items-center justify-between mb-5">
        <span className="text-xl font-bold text-gray-800">
          My Tasks
        </span>

        <div className="flex gap-8 text-sm font-medium text-gray-500">
          <span className="text-blue-600 border-b-2 border-blue-600 pb-1">
            All
          </span>

          <span className="hover:text-gray-800 cursor-pointer">
            To Do
          </span>

          <span className="hover:text-gray-800 cursor-pointer">
            In Progress
          </span>

          <span className="hover:text-gray-800 cursor-pointer">
            Completed
          </span>
        </div>
      </div>

      <div className="flex items-center text-sm font-semibold text-gray-500 border-b pb-3 mb-3">
        <span className="w-1/5">Task</span>
        <span className="w-1/5">Project</span>
        <span className="w-1/5">Priority</span>
        <span className="w-1/5">Due Date</span>
        <span className="w-1/5">Status</span>
      </div>

      {/* Tasks */}
      <Task />
      <Task />
      <Task />
      <Task/>
        <Task />
      <Task />
      <Task />
      <Task/>
        <Task />
      <Task />
    </div>
  );
};

export default All_TaskBoard;