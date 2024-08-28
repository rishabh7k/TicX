import React from "react";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="h-svh w-24"></div>
      <div className="w-full bg-slate-100">
        <div className="h-20 p-6 pl-9">
          <div className="text-2xl flex">
            <div className="text-slate-700 font-bold">
              Tickets
              <span className="text-xs text-slate-500 ml-2">50 Issues</span>
            </div>
            <div className="flex ml-auto text-xs text-slate-500 ">
              <div className="ml-auto flex space-x-3 mr-16">
                <button className="px-3">&lt;</button>
                <p className="flex items-center justify-center">1 - 50</p>
                <button className="px-3">&gt;</button>
              </div>
              <div className="ml-auto flex text-xs space-x-3 mr-16 border bg-white px-4">
                <div className="flex items-center justify-center">
                  Filter {"\u26B2"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-svh ml-9 bg-white flex">
          <div className="border w-1/3">
            <div className="p-4">
              <input
                type="text"
                placeholder="Search..."
                className="bg-slate-100 w-full p-2 text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
