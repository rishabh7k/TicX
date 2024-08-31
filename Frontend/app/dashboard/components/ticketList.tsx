import React from "react";

const TicketList = () => {
  return (
    <div className="border w-1/3">
      <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-100 w-full p-2 text-sm"
        />
      </div>
      <div className="border border-x-0 flex p-4">
        <div className="w-11 h-11 bg-pink-600"></div>
        <div className="ml-3 font-bold">
          NBC1243 <span className="mr-auto">2024-08-20</span>
        </div>
      </div>
    </div>
  );
};

export default TicketList;
