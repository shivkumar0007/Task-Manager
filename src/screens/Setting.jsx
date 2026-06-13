import React from "react";

const Setting = () => {
  return (
    <div className="bg-white w-[calc(100vw-560px)] rounded-xl shadow h-11/12 ml-6 mt-3 p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Settings
      </h1>

   
      <div className="bg-gray-50 rounded-xl p-5 mb-6">
        <h2 className="text-lg font-semibold mb-4">
          Profile Information
        </h2>

        <div className="flex items-center gap-5 mb-5">
          <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
            A
          </div>

          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Change Photo
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      
      <div className="bg-gray-50 rounded-xl p-5 mb-6">
        <h2 className="text-lg font-semibold mb-4">
          Theme Settings
        </h2>

        <div className="flex gap-4">
          <button className="px-5 py-3 border-2 border-blue-500 bg-blue-50 rounded-xl font-medium">
             Light Mode
          </button>

          <button className="px-5 py-3 border rounded-xl font-medium hover:bg-gray-100">
            Dark Mode
          </button>
        </div>
      </div>

      
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Setting;