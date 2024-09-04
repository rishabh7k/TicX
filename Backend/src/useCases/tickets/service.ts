import { Ticket, TicketStatus, Filters } from "./models.js";
import prisma from "../../database/service.js";
import { v4 as uuidv4 } from "uuid";

export default class TicketsSerice {
  static async addTicket(ticket: Ticket) {
    ticket.ticket_id = uuidv4().slice(0, 8);
    const _ = await prisma.tbl_tickets.create({
      data: {
        ticket_id: ticket.ticket_id,
        client_name: ticket.client_name,
        phone: ticket.phone,
        address: ticket.address,
        device: ticket.device,
        ticket_status: TicketStatus.PEN,
        issue_title: ticket.issue_title,
        issue_description: ticket.issue_description,
      },
    });
  }

  static async fetch(page: number, filters: Filters) {
    const pageSize = 7;
    const tickets = await prisma.tbl_tickets.findMany({
      //   where: {
      //     ticket_status: { in: filters.status },
      //     device: { in: filters.devices },
      //   },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        created_at: "desc",
      },
    });
    const totalTickets = await prisma.tbl_tickets.count();
    const response = {
      data: tickets,
      page: page,
      pageSize: pageSize,
      totalPages: Math.ceil(totalTickets / pageSize),
      totalTickets,
    };
    return response;
  }

  static async fetchUnique(ticket_id: string) {
    const ticket = await prisma.tbl_tickets.findUnique({
      where: { ticket_id },
    });
    return ticket;
  }
}
