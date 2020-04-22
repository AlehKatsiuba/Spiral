import { v4 as uuid } from 'uuid';

export const accounts = [
  { id: uuid(), name: 'Cheking', type: 'Main account (...0353)', count: 1500 },
  { id: uuid(), name: 'Savings', type: 'Main account (...0353)', count: 5000 },
  { id: uuid(), name: 'Goodnes Points', type: 'Main account (...0353)', count: 500 },
];

export const user = {
  login: 'test@test.com',
  name: 'Test User',
  avatar: 'https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg'
}
