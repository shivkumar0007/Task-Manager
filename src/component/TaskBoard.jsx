import React from "react";

const Card = () => {
  return (
    <div className="bg-white rounded-xl p-3 mt-3 w-[calc(100vw-81vw)] shadow-sm hover:shadow-md transition duration-200 cursor-pointer">
      <h3 className="font-semibold text-gray-800">
        Design Landing Page
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        Website Redesign
      </p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-xs text-gray-400">
          May 25
        </span>

        <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white text-xs font-semibold">
          A
        </div>
      </div>
    </div>
  );
};

const TaskBoard = () => {
  return (
    <div className="bg-white w-[calc(100vw-560px)] rounded-xl shadow ml-6 mt-3 p-4">
      <h1 className="ml-5 text-2xl font-bold">Task Board</h1>

      <div className="flex justify-around">
     
        <div className="w-[calc(100vw-80vw)] mt-5 bg-gray-300  rounded-xl flex flex-col items-center">
          <h1 className="flex justify-between w-full px-3 py-2 mb-1 font-semibold">
            <span>To Do</span>
            <span>20</span>
          </h1>

          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        
        <div className="w-[calc(100vw-80vw)] mt-5 bg-red-50 h-[calc(100vh-58vh)] rounded-xl flex flex-col items-center">
          <h1 className="flex justify-between w-full px-3 py-2 mb-1 font-semibold">
            <span>In Progress</span>
            <span>18</span>
          </h1>

          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        
        <div className="w-[calc(100vw-80vw)] mt-5 bg-blue-50 h-[calc(100vh-58vh)] rounded-xl flex flex-col items-center">
          <h1 className="flex justify-between w-full px-3 py-2 mb-1 font-semibold">
            <span>Completed</span>
            <span>27</span>
          </h1>

          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
