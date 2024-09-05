import prisma from "../../database/service.js";
import { v4 as uuidv4 } from "uuid";
export default class BillsService {
  static async addBill(ticket_id: string) {
    const bill_id = uuidv4().slice(0, 8);
    const _ = await prisma.tbl_tickets.update({
      where: { ticket_id: ticket_id },
      data: { bill_id: bill_id },
    });
  }

  static async fetchUnique(ticket_id: string, bill_id: string) {
    const ticket = await prisma.tbl_tickets.findUnique({
      where: { ticket_id, bill_id },
    });
    return ticket;
  }
}
