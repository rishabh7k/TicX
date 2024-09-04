import React from "react";

interface FilterProps {
  totalIssues: number;
  totalPages: number;
}

const TicketFilters: React.FC<FilterProps> = ({ totalIssues, totalPages }) => {
  return (
    <div className="h-20 p-6 pl-9">
      <div className="text-2xl flex">
        <div className="text-slate-700 font-bold">
          Tickets
          <span className="text-xs text-slate-500 ml-2">
            {totalIssues} Issues
          </span>
        </div>
        <div className="flex ml-auto text-xs text-slate-500 ">
          <div className="ml-auto flex space-x-3 mr-16">
            <button className="px-3">&lt;</button>
            <p className="flex items-center justify-center">1 - {totalPages}</p>
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
  );
};

export default TicketFilters;
