import { accounts, user, payDay } from "./mocks";
import { delayPromise, generateInt, emulateServerResponse } from "./util";

class ApiSevice {
  constructor() { }

  logIn(login, password) {
    if (login === 'test@test.com' && password === 'test') {
      return emulateServerResponse(user);
    }
    throw new Error('Wrong login or password');
  }

  fetchAccounts() {
    return emulateServerResponse(accounts);
  }

  fetchPayDay() {
    return emulateServerResponse(payDay);
  }
}

export const apiSevice = new ApiSevice();
