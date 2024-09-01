import React from "react";
import TicketDetails from "./components/tickets/ticketDetails";
import TicketList from "./components/tickets/ticketList";
import SideBar from "./components/navigation/sideBar";
import TicketFilters from "./components/tickets/ticketFilters";
import { TicketListModel } from "../backend/models";
import BackendService from "../backend/service";

const Dashboard = async () => {
  const tickets: TicketListModel = await BackendService.fetch();
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full bg-slate-100">
        <TicketFilters />
        <div className="h-svh ml-9 bg-white flex">
          <TicketList tickets={tickets} /> <TicketDetails />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
