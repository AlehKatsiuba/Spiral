import { v4 as uuid } from 'uuid';

export const accounts = [
  { id: uuid(), name: 'Cheking', type: 'Main account (...0353)', count: 1500.20 },
  { id: uuid(), name: 'Savings', type: 'Main account (...0353)', count: 5000.20, ssi: 3 },
  { id: uuid(), name: 'Goodnes Points ❤️', type: 'Main account (...0353)', count: 500.40 },
];

export const user = {
  login: 'test@test.com',
  name: 'Test User',
  avatar: 'https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg'
}

export const chekingTransactions = [
  {
    date: "2020-04-23T16:00:00.000Z",
    balance: 10000,
    transactions: [{
      id: uuid(),
      name: 'Target',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'Starbucks',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'iPark love',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'Starbucks',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'Lord of the ring inc',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'iPark love',
      type: 'Closter NJ',
      amount: 100
    }]
  },
  {
    date: "2020-04-22T16:00:00.000Z",
    balance: 10000,
    transactions: [{
      id: uuid(),
      name: 'Starbucks',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'iPark love',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'Starbucks',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'Lord of the ring inc',
      type: 'Pay Day',
      amount: 100
    }]
  },
  {
    date: "2020-04-21T16:00:00.000Z",
    balance: 10000,
    transactions: [{
      id: uuid(),
      name: 'Target',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'Lord of the ring inc',
      type: 'Pay Day',
      amount: 100
    }, {
      id: uuid(),
      name: 'Target',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'Starbucks',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'iPark love',
      type: '230 New York NY',
      amount: 100
    }]
  },
  {
    date: "2020-04-20T16:00:00.000Z",
    balance: 10000,
    transactions: [{
      id: uuid(),
      name: 'Lord of the ring inc',
      type: 'Pay Day',
      amount: 100
    }, {
      id: uuid(),
      name: 'Starbucks',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'Target',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'iPark love',
      type: '230 New York NY',
      amount: 100
    }]
  },
  {
    date: "2020-04-19T16:00:00.000Z",
    balance: 10000,
    transactions: [{
      id: uuid(),
      name: 'Target',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'Lord of the ring inc',
      type: 'Pay Day',
      amount: 100
    }, {
      id: uuid(),
      name: 'iPark love',
      type: '230 New York NY',
      amount: 100
    }]
  },
  {
    date: "2020-04-18T16:00:00.000Z",
    balance: 10000,
    transactions: [{
      id: uuid(),
      name: 'Target',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'iPark love',
      type: '230 New York NY',
      amount: 100
    }, {
      id: uuid(),
      name: 'Target',
      type: 'Closter NJ',
      amount: 100
    }, {
      id: uuid(),
      name: 'Starbucks',
      type: 'Closter NJ',
      amount: 100
    }]
  }
];

export const payDay = {
  employerName: 'Facebook, Inc',
  count: 3000,
}
