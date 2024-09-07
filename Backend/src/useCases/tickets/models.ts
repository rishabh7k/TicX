import { stat } from "fs";

export enum DeviceVendors {
  APPLE = "Apple",
  SAMSUNG = "Samsung",
}

export enum TicketStatus {
  IN_P = "In Progress",
  PEN = "Pending",
  RES = "Resolved",
}

export class Filters {
  readonly status: string[];
  readonly devices: string[];
  readonly dateRange: number | null;

  constructor(init?: Partial<Filters>) {
    this.status = init?.status ?? Filters.DEFAULT_STATUS;
    this.devices = init?.devices ?? Filters.DEFAULT_DEVICES;
    this.dateRange = init?.dateRange ?? Filters.DEFAULT_DATE_RANGE;

    this.validateStatus();
  }

  private validateStatus(): void {
    if (!Array.isArray(this.status) || this.status.length === 0) {
      throw new Error("Status must be a non-empty array of strings");
    }
  }

  private static readonly DEFAULT_STATUS: string[] = [TicketStatus.PEN];
  private static readonly DEFAULT_DEVICES: string[] = [];
  private static readonly DEFAULT_DATE_RANGE: number | null = null;

  public static createDefault(): Filters {
    return new Filters();
  }
}

export interface Ticket {
  ticket_id: string | null;
  client_name: string;
  phone: string;
  address: string;
  device: DeviceVendors;
  ticket_status: TicketStatus | null;
  issue_title: string;
  issue_description: string;
  bill_id: string | null;
  created_at: Date | null;
}
