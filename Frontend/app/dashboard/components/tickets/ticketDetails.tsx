import React from "react";
import StatusDropdown from "./ticketStatus";
const TicketDetails = () => {
  return (
    <div className="border border-x-0 w-full">
      {/* <div className="h-svh">yo</div> */}
      <div className="h-16 border-y-0 border-b p-3 flex">
        <div className="text-3xl font-bold text-slate-700">#x4y5z6a7</div>
        <div className="ml-auto">
          <StatusDropdown />
        </div>
      </div>
      <div className="p-3 space-y-2">
        <div className="text-slate-800 text-2xl mt-2 border-b">
          Title: No Audio During Calls
        </div>
        <div className="font-mono">Samsung</div>
      </div>
    </div>
  );
};

export default TicketDetails;
