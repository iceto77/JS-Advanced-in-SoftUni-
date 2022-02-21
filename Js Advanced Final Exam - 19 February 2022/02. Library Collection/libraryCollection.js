class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    };

    addBook(bookName, bookAuthor) {
        if (this.books.length == this.capacity) {
            throw new Error('Not enough space in the collection.');
        };
        let newBook = { bookName, bookAuthor, payed: false };
        this.books.push(newBook);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    };

    payBook(bookName) {
        let targetBook = this.books.find(x => x.bookName == bookName);
        if (!targetBook) {
            throw new Error(`${bookName} is not in the collection.`);
        };
        if (targetBook.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        };
        targetBook.payed = true;
        return `${bookName} has been successfully paid.`;
    };

    removeBook(bookName) {
        let targetBook = this.books.find(x => x.bookName == bookName);
        if (!targetBook) {
            throw new Error('The book, you\'re looking for, is not found.');
        };
        if (targetBook.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        };
        let index = this.books.indexOf(targetBook);
        this.books.splice(index, 1)
        return `${bookName} remove from the collection.`;
    };

    getStatistics(bookAuthor) {
        let result = [];
        if (!bookAuthor) {
            let emptySlots = this.capacity - this.books.length;
            result.push(`The book collection has ${emptySlots} empty spots left.`);
            for (const book of this.books) {
                let status = '';
                if (book.payed == true) {
                    status = 'Has Paid';
                } else {
                    status = 'Not Paid';
                };
                result.push(`${book.bookName} == ${book.bookAuthor} - ${status}.`);
            }
        } else {
            let targetBooks = this.books.filter(x => x.bookAuthor == bookAuthor);
            if (targetBooks.length == 0) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            };
            for (const book of targetBooks) {
                let status = '';
                if (book.payed == true) {
                    status = 'Has Paid';
                } else {
                    status = 'Not Paid';
                };
                result.push(`${book.bookName} == ${book.bookAuthor} - ${status}.`);
            };
        };
        return result.join('\n');
    };
}


// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));


// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));



// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));


const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Iceto'));


// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());
