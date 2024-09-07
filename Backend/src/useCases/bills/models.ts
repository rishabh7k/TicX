import { v4 as uuidv4 } from "uuid";

interface BillComponentValues {
  title: string;
  cost: number;
}
interface BillComponents {
  display: BillComponentValues | null;
  battery: BillComponentValues | null;
  motherBoard: BillComponentValues | null;
  service: number;
}

export class Bill {
  bill_id: string;
  ticket_id: string;
  imei: string;
  bill_components: BillComponents;
  bill_total: number | null;
  created_at: Date | null;
  constructor(billDto: BillDto) {
    this.bill_id = uuidv4().slice(0, 8);
    this.ticket_id = billDto.ticket_id;
    this.imei = billDto.imei;
    this.bill_components = billDto.bill_components;
    this.bill_total = null;
    this.created_at = null;
  }
}

export type BillDto = Omit<Bill, "bill_id" | "bill_total" | "created_at">;
