import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Ticket, TicketStatus } from "./models.js";
import prisma from "../../database/service.js";

const ticketsRouter = express.Router();

ticketsRouter.post("/add", async (req: Request, res: Response) => {
  try {
    const ticket: Ticket = req.body;
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
    res.status(200).json({
      success: `New ticket created Successfully: ${ticket.ticket_id}`,
    });
  } catch (e) {
    res.status(500).json({ error: `Internal Server Error: ${e}` });
  }
});

ticketsRouter.post("/fetch", async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = 7;

  try {
    const tickets = await prisma.tbl_tickets.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        created_at: "desc",
      },
    });

    const totalTickets = await prisma.tbl_tickets.count();
    res.json({
      data: tickets,
      page,
      pageSize,
      totalPages: Math.ceil(totalTickets / pageSize),
      totalTickets,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching tickets." });
  }
});

ticketsRouter.post("/fetch/:ticket_id", async (req: Request, res: Response) => {
  try {
    const { ticket_id } = req.params;
    const ticket = await prisma.tbl_tickets.findUnique({
      where: { ticket_id },
    });
    if (!ticket)
      res
        .status(200)
        .json({ success: `No Tickets found for Id: ${ticket_id}` });
    else res.status(200).json(ticket);
  } catch (e) {
    res.status(500).json({ error: `${e}` });
  }
});

export default ticketsRouter;
