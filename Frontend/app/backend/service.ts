import { makePostRequest } from "./request";
import { TicketListModel } from "./models";
export default class BackendService {
  static fetch(): Promise<TicketListModel> {
    return makePostRequest("yo");
  }
}
