const books = require('./books-list');


// O i < books.length - 1 é que eu já levo em consideração que o ultimo indice ja assume a ultima posição
for (let i = 0; i < books.length - 1; i++) {
  let cheapPrice = i; 

  for (let j = i + 1; j < books.length; j++) {
    if (books[j].price < books[cheapPrice].price) {
      cheapPrice = j;
    }
  }

  if (cheapPrice !== i) {
    let temp = books[i];
    books[i] = books[cheapPrice];
    books[cheapPrice] = temp;
  }
}

console.log(books);