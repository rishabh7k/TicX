import express, { Request, Response } from "express";
import { Ticket } from "./models.js";
import { Filters } from "./models.js";
import TicketsSerice from "./service.js";

const ticketsRouter = express.Router();

ticketsRouter.post("/add", async (req: Request, res: Response) => {
  try {
    const ticket: Ticket = req.body;
    TicketsSerice.addTicket(ticket);
    res.status(200).json({
      success: `New ticket created Successfully: ${ticket.ticket_id}`,
    });
  } catch (e) {
    res.status(500).json({ error: `Internal Server Error: ${e}` });
  }
});

ticketsRouter.post("/fetch", async (req: Request, res: Response) => {
  try {
    const page: number = parseInt(req.query.page as string) || 1;
    const payload: Filters = req.body;
    const filters = new Filters(payload);

    const tickets = await TicketsSerice.fetch(page, filters);
    res.json(tickets);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching tickets." });
  }
});

ticketsRouter.post("/fetch/:ticket_id", async (req: Request, res: Response) => {
  try {
    const { ticket_id } = req.params;
    const ticket = await TicketsSerice.fetchUnique(ticket_id);
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
