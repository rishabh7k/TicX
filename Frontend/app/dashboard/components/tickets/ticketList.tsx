"use client";
import React from "react";
import { TicketListModel, TicketModel } from "@/app/backend/models";
import { statusColor } from "./ticketStatus";
interface TicketListProp {
  tickets: TicketListModel;
  onTicketClick: (ticket: TicketModel) => void;
}

const TicketList: React.FC<TicketListProp> = ({ tickets, onTicketClick }) => {
  return (
    <div className="border w-5/12">
      <div className="overflow-y-auto h">
        {tickets.data.map((ticket: TicketModel) => (
          <div
            onClick={() => onTicketClick(ticket)}
            className="border-b flex p-4 hover:bg-slate-100"
            key={ticket.ticket_id}
          >
            <div className="w-11 h-11 bg-pink-600"></div>
            <div className="ml-3 font-bold items-center w-1/2 text-slate-700">
              <div>#{ticket.ticket_id}</div>
              <div className="text-sm font-normal text-gray-500 truncate max-w-full">
                {ticket.issue_title}
              </div>
            </div>
            <div className="ml-auto flex flex-col text-right">
              <span className="text-xs font-normal">20/08</span>
              <span className="text-xs font-normal">{ticket.device}</span>
              <span
                className={`text-xs font-normal ${statusColor(
                  ticket.ticket_status
                )} text-white p-1 rounded-sm`}
              >
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
