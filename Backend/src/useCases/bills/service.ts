import prisma from "../../database/service.js";
import { BillDto, Bill } from "./models.js";

export default class BillsService {
  static async addBill(bill: BillDto): Promise<void> {
    const preparedBill: Bill = new Bill(bill);
    await prisma.$executeRaw`
    CALL insert_bill(
      ${preparedBill.bill_id}::VARCHAR(50),
      ${preparedBill.ticket_id}::VARCHAR(50),
      ${preparedBill.imei}::VARCHAR(50),
      ${preparedBill.bill_components}::JSONB
    );
  `;
  }

  static async fetchUnique(ticket_id: string, bill_id: string) {
    const ticket = await prisma.tbl_tickets.findUnique({
      where: { ticket_id, bill_id },
    });
    return ticket;
  }
}
