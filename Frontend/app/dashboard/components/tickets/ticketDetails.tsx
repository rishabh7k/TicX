import React from "react";
import StatusDropdown from "./ticketStatus";
import { TicketModel } from "@/app/backend/models";

interface TicketDetailsProps {
  ticket: TicketModel;
}

const TicketDetails: React.FC<TicketDetailsProps> = ({ ticket }) => {
  const isDisabled = () => {
    if (ticket.bill_id === "string") return false;
    else return true;
  };
  return (
    <div className="border border-x-0 w-full">
      <div className="h-16 border-y-0 border-b p-3 flex">
        <div className="text-3xl font-bold text-slate-700">
          #{ticket.ticket_id}
        </div>
        <div className="ml-auto">
          <StatusDropdown />
        </div>
      </div>
      <div className="p-3 space-y-2">
        <div className="flex border-b">
          <div className="text-slate-800 text-2xl mt-2 ">
            Title: {ticket.issue_title}
          </div>
          <div className="font-mono">{ticket.device}</div>
        </div>
        <div className="flex space-x-3 w-full">
          <div className="mr-auto">Client: {ticket.client_name}</div>
          <div className="font-mono border border-red-500">
            call: {ticket.phone}
          </div>
        </div>
        <div className="font-mono">{ticket.device}</div>
        <div>{ticket.issue_description}</div>
      </div>
      <div className="mt-32 ml-4 border">
        <button
          className={`p-2 ${
            isDisabled()
              ? "bg-zinc-200 text-gray-500 cursor-not-allowed"
              : "bg-zinc-200 hover:bg-zinc-400"
          }`}
          disabled={isDisabled()}
        >
          Show Bill
        </button>
      </div>
    </div>
  );
};

export default TicketDetails;
