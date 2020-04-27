import { accounts, user, payDay, chekingTransactions } from "./mocks";
import { emulateServerResponse, dateFormat } from "./util";

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

  fetchChekingTransactions(searchString) {
    searchString = searchString.replace(/\\/g, '\\\\');
    const regExp = new RegExp(searchString, 'gi');
    return emulateServerResponse(chekingTransactions)
      .then(days => {
        return days.reduce((arr, day) => {
          const filteredTransactions = day.transactions.filter(t => {
            return t.name.match(regExp) || t.type.match(regExp)
          });
          return !filteredTransactions.length ?
            arr :
            arr.concat({ ...day, transactions: filteredTransactions });
        }, []);
      })
      .then(days =>
        days.map(day => ({
          ...day, date: new Date(day.date)
        }))
      );
  }
}

export const apiSevice = new ApiSevice();
