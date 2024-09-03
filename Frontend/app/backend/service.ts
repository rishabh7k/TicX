import { makePostRequest } from "./request";
import { TicketListModel } from "./models";
export default class BackendService {
  static fetch() {
    return makePostRequest("yo");
  }
}
