// Order books by price

const books = require('./books-list.js');
const cheapestAndExpensiveBooks = require('./cheapest-and-expensive-books.js');


let booksByCheapest = [...books];
for (let i = 0; i < booksByCheapest.length; i++) {
  let cheapestBook = cheapestAndExpensiveBooks(booksByCheapest, i).cheapestBook;
  console.log(cheapestBook, 'cheapestBook')
  let currentBook = booksByCheapest[i];
  let cheapestPrice = booksByCheapest[cheapestBook];

  booksByCheapest[i] = cheapestPrice;
  booksByCheapest[cheapestBook] = currentBook;
}

let booksByExpensive = [...books]; 
for (let i = 0; i < booksByExpensive.length; i++) {
  let expensiveBook = cheapestAndExpensiveBooks(booksByExpensive, i).expensiveBook;
  let currentBook = booksByExpensive[i];
  let expensivePrice = booksByExpensive[expensiveBook];

  booksByExpensive[i] = expensivePrice;
  booksByExpensive[expensiveBook] = currentBook;
}

console.log("Books ordered by cheapest:", booksByCheapest);

console.log("Books ordered by most expensive:", booksByExpensive);
