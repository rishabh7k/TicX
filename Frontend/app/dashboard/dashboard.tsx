"use client";

import React, { useState, useEffect } from "react";
import TicketDetails from "./components/tickets/ticketDetails";
import TicketList from "./components/tickets/ticketList";
import SideBar from "./components/navigation/sideBar";
import TicketFilters from "./components/tickets/ticketFilters";
import { TicketListModel, TicketModel } from "../backend/models";
import BackendService from "../backend/service";

const Dashboard = () => {
  const [tickets, setTickets] = useState<TicketListModel | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<TicketModel | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const fetchedTickets = await BackendService.fetch();
        setTickets(fetchedTickets);
        setSelectedTicket(fetchedTickets.data[0]);
      } catch (err) {
        setError("Failed to fetch tickets");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!tickets) return null;

  return (
    <div className="flex">
      <SideBar />
      <div className="w-full bg-slate-100">
        <TicketFilters
          totalPages={tickets.totalPages}
          totalIssues={tickets.totalTickets}
        />
        <div className="h-svh ml-9 bg-white flex">
          <TicketList tickets={tickets} onTicketClick={setSelectedTicket} />
          {selectedTicket && <TicketDetails ticket={selectedTicket} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
