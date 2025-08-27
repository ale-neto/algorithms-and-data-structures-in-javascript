// Order books by price

const books = require('./books-list.js');
const cheapestAndExpensiveBooks = require('./cheapest-and-expensive-books.js');

// --- Order books from most cheapest to expensive
let booksByCheapest = [...books];
for (let i = 0; i < booksByCheapest.length; i++) {
  let cheapestBook = cheapestAndExpensiveBooks(booksByCheapest, i).cheapestBook;
  let currentBook = booksByCheapest[i];
  let cheapestPrice = booksByCheapest[cheapestBook];

  booksByCheapest[i] = cheapestPrice;
  booksByCheapest[cheapestBook] = currentBook;
}

// --- Order books from most expensive to cheapest
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
