import { accounts } from "./moks";
import { delayPromise, generateInt, emulateServerResponse } from "./util";

class ApiSevice {
  constructor() { }

  fetchAccounts() {
    return emulateServerResponse(accounts);
  }
}

export const apiSevice = new ApiSevice();
