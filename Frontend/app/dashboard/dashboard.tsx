import React from "react";
import TicketDetails from "./components/ticketDetails";
import TicketList from "./components/ticketList";
import SideBar from "./components/sideBar";
import TicketNav from "./components/ticketNav";
import { TicketListModel } from "../backend/models";
import BackendService from "../backend/service";
const Dashboard = async () => {
  const tickets: TicketListModel = await BackendService.fetch();
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full bg-slate-100">
        <TicketNav />
        <div className="h-svh ml-9 bg-white flex">
          <TicketList tickets={tickets} /> <TicketDetails />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
