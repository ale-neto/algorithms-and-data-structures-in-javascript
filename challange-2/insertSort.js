const books = require("./books-list");
// Pegamos a "caixa" com a lista de livros (cada livro tem um preço).

function insertionSort(arr) {
  // Vamos ensinar passo a passo como arrumar os livros do mais barato pro mais caro.

  for (let i = 1; i < arr.length; i++) {
    // Começamos pelo segundo livro da fila (o primeiro já está sozinho).

    let key = arr[i];
    // "key" é o livro que a gente pegou na mão para colocar no lugar certo.

    let j = i - 1;
    // "j" aponta para o livro que está logo atrás do que pegamos.

    while (j >= 0 && arr[j].price > key.price) {
      // Enquanto ainda tem livro atrás e o de trás é MAIS caro que o da nossa mão...

      arr[j + 1] = arr[j];
      // Empurramos o livro caro uma posição pra frente (fazendo espaço).

      j--;
      // Andamos uma casinha pra trás para comparar com o próximo livro de trás.
    }

    arr[j + 1] = key;
    // Achamos o lugar certinho! Colocamos o nosso livro ali.
  }

  return arr;
  // Devolvemos a fila de livros toda arrumadinha.
}

const sortedBooks = insertionSort(books);
// Usamos a nossa "receita" para arrumar a lista de livros que pegamos no começo.

console.log(sortedBooks);
// Mostramos na tela como ficou a fila de livros, do mais barato para o mais caro.
