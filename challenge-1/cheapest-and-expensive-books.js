// Get the cheapest and the most expensive book 
function cheapestAndExpensiveBooks(books, initialPosition) {
    let cheapestBook = initialPosition;
    let expensiveBook = initialPosition;

    for (let i = initialPosition; i < books.length; i++) {
        if (books[i].price < books[cheapestBook].price) {
            cheapestBook = i;
        }
        if (books[i].price > books[expensiveBook].price) {
            expensiveBook = i;
        }
    }

    return { cheapestBook, expensiveBook };
}


module.exports = cheapestAndExpensiveBooks; 