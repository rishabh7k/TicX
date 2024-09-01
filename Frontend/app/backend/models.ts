export interface TicketPeek {
  ticket_id: string;
  device: string;
  ticket_status: string;
  issue_title: string;
}
export interface TicketListModel {
  page: number;
  pageSize: number;
  totalPages: number;
  totalTickets: number;
  data: TicketPeek[];
}
