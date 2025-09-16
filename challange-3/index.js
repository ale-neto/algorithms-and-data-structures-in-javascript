const { books1, books2 } = require("./books-lists.js");
// Aqui estamos pegando duas listas de livros: a "books1" e a "books2".
// Imagina que temos duas caixas de livros, cada uma com preços diferentes.

function mergeSortedBooks(list1, list2) {
  let mergedList = []; // Essa será a nova caixa onde vamos juntar todos os livros.
  let i = 0; // Esse "i" é o dedinho que aponta para os livros da primeira caixa.
  let j = 0; // Esse "j" é o dedinho que aponta para os livros da segunda caixa.
  let k = 0; // Esse "k" é o dedinho que mostra onde vamos colocar o próximo livro na nova caixa.

  // Enquanto ainda tiver livros nas duas caixas...
  while (i < list1.length && j < list2.length) {
    // A gente olha os preços dos dois livros que os dedinhos estão apontando.
    if (list1[i].price < list2[j].price) {
      // Se o livro da primeira caixa for mais barato, ele entra na nova caixa primeiro.
      mergedList[k] = list1[i];
      i++; // A gente move o dedinho da primeira caixa para o próximo livro.
    } else {
      // Senão, o livro da segunda caixa é mais barato e vai primeiro.
      mergedList[k] = list2[j];
      j++; // Move o dedinho da segunda caixa para o próximo livro.
    }

    k++; // Sempre que colocamos um livro na nova caixa, o dedinho do "k" anda também.
  }

  // Se ainda sobraram livros na primeira caixa, colocamos todos na nova caixa.
  while (i < list1.length) {
    mergedList[k] = list1[i];
    i++;
    k++;
  }

  // Se ainda sobraram livros na segunda caixa, colocamos todos na nova caixa.
  while (j < list2.length) {
    mergedList[k] = list2[j];
    j++;
    k++;
  }

  return mergedList; // Agora temos uma nova caixa com todos os livros, em ordem de preço!
}

books1.sort((a, b) => a.price - b.price);
// Primeiro a gente arruma os livros da primeira caixa em ordem de preço (do mais barato pro mais caro).
books2.sort((a, b) => a.price - b.price);
// Fazemos a mesma coisa com a segunda caixa.

const mergedBooks = mergeSortedBooks(books1, books2);
// Agora juntamos as duas caixas em uma só, mantendo tudo em ordem.

console.log(mergedBooks);
// No final, mostramos a caixa nova com todos os livros organizadinhos.
