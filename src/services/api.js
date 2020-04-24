import { accounts, user, payDay, chekingTransactions } from "./mocks";
import { emulateServerResponse } from "./util";

class ApiSevice {

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

  fetchChekingTransactions() {
    return emulateServerResponse(chekingTransactions)
      .then(days =>
        days.map(day => ({
          ...day, date: new Date(day.date)
        }))
      );
  }
}

export const apiSevice = new ApiSevice();
