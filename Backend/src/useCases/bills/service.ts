import prisma from "../../database/service.js";
import { BillDto, Bill } from "./models.js";
import TicketsSerice from "../tickets/service.js";

export default class BillsService {
  static async addBill(bill: BillDto): Promise<void> {
    const preparedBill: Bill = new Bill(bill);
    await prisma.$executeRaw`
    CALL upsert_bill(
      ${preparedBill.bill_id}::VARCHAR(50),
      ${preparedBill.ticket_id}::VARCHAR(50),
      ${preparedBill.imei}::VARCHAR(50),
      ${preparedBill.bill_components}::JSONB
    );
  `;
    await TicketsSerice.updateBillId(
      preparedBill.ticket_id,
      preparedBill.bill_id
    );
  }

  static async updateBill(bill: Bill): Promise<void> {
    await prisma.$executeRaw`
    CALL upsert_bill(
      ${bill.bill_id}::VARCHAR(50),
      ${bill.ticket_id}::VARCHAR(50),
      ${bill.imei}::VARCHAR(50),
      ${bill.bill_components}::JSONB
    );
  `;
  }

  static async fetchUnique(ticket_id: string, bill_id: string) {
    const bill = await prisma.tbl_bills.findUnique({
      where: { bill_id, ticket_id },
    });
    return bill;
  }
}
