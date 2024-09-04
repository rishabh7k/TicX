"use client";
import React, { useState } from "react";
import { TicketStatusEnum } from "../../../backend/models"; // Adjust the import path as needed

const StatusDropdown: React.FC = () => {
  const [status, setStatus] = useState<TicketStatusEnum>(TicketStatusEnum.IN_P);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value as TicketStatusEnum);
  };
  return (
    <div className="w-40">
      <select
        id="status"
        value={status}
        onChange={handleStatusChange}
        className={`text-white mt-1 block w-full p-2 border border-gray-300 ${statusColor(
          status
        )} rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
      >
        {Object.values(TicketStatusEnum).map((status) => (
          <option
            key={status}
            value={status}
            className={`${statusColor(status)}`}
          >
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};
export const statusColor = (status: TicketStatusEnum) => {
  switch (status) {
    case TicketStatusEnum.IN_P:
      return "bg-blue-400";
    case TicketStatusEnum.PEN:
      return "bg-amber-400";
    case TicketStatusEnum.RES:
      return "bg-green-400";
    default:
      return "bg-white"; // Default background color
  }
};

export default StatusDropdown;
