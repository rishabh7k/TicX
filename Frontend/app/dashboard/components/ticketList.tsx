import React from "react";
import { TicketListModel, TicketPeek } from "@/app/backend/models";

interface TicketListProp {
  tickets: TicketListModel;
}

const TicketList: React.FC<TicketListProp> = ({ tickets }) => {
  return (
    <div className="border w-5/12">
      <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-100 w-full p-2 text-sm"
        />
      </div>
      <div className="overflow-y-auto h">
        {tickets.data.map((ticket: TicketPeek) => (
          <div className="border border-x-0 flex p-4 hover:bg-slate-100">
            <div className="w-11 h-11 bg-pink-600"></div>
            <div className="ml-3 font-bold items-center w-1/2">
              <div>#{ticket.ticket_id}</div>
              <div className="text-sm font-normal text-gray-500 truncate max-w-full">
                {ticket.issue_title}
              </div>
            </div>
            <div className="ml-auto flex flex-col text-right">
              <span className="text-xs font-normal">20/08</span>
              <span className="text-xs font-normal">{ticket.device}</span>
              <span className="text-xs font-normal bg-orange-400 text-white p-1 rounded-sm">
                {ticket.ticket_status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
