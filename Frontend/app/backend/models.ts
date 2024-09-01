export enum TicketStatusEnum {
  IN_P = "In Progress",
  PEN = "Pending",
  RES = "Resolved",
}

export interface TicketModel {
  ticket_id: string;
  device: string;
  ticket_status: TicketStatusEnum;
  issue_title: string;
}
export interface TicketListModel {
  page: number;
  pageSize: number;
  totalPages: number;
  totalTickets: number;
  data: TicketModel[];
}
