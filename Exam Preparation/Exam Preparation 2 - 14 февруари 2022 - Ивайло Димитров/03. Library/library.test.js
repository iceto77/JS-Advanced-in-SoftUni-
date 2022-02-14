const library = require("./library");
const { assert } = require('chai');
let { expect } = require('chai');

describe("Object Library Tests", function () {
    describe("Function calcPriceOfBook Tests", function () {
        it("Should calculate the price for a years less than to 1980", function () {
            let name = 'Good morning';
            let year = 1977;
            assert(library.calcPriceOfBook(name, year) == 'Price of Good morning is 10.00');
        });
        it("Should calculate the price for a years less is equal to 1980", function () {
            let name = 'Good morning';
            let year = 1980;
            assert(library.calcPriceOfBook(name, year) == 'Price of Good morning is 10.00');
        });
        it("Should calculate the price for a years larger than 1980", function () {
            let name = 'Good morning';
            let year = 2002;
            expect(library.calcPriceOfBook(name, year)).to.equal('Price of Good morning is 20.00');
        });
        it("Should throw error if nameOfBook is not a string", function () {
            let name = 123;
            let year = 2002;
            expect(() => library.calcPriceOfBook(name, year)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook([], year)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook({}, year)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(null, year)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(undefined, year)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(NaN, year)).to.throw(Error, 'Invalid input');
        });
        it("Should throw error if year is not an integer", function () {
            let name = 'Good morning';
            let year = '2002';
            expect(() => library.calcPriceOfBook(name, year)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(name, 'test')).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(name, [])).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(name, {})).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(name, null)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(name, undefined)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(name, NaN)).to.throw(Error, 'Invalid input');
        });

    });
    describe("Property findBook Tests", function () {
        it("Should throw error if booksArr is empty", function () {
            let booksArr = [];
            let desiredBook = 'Troy';
            expect(() => library.findBook(booksArr, desiredBook)).to.throw(Error, 'No books currently available');
        });
        it("Should returns a message that the book has been found", function () {
            let booksArr = ['Troy', 'Life Style', 'Torronto', 'Terminator'];
            let desiredBook = 'Troy';
            assert(library.findBook(booksArr, desiredBook) == 'We found the book you want.');
        });
        it("Should returns a message that the book has not been found", function () {
            let booksArr = ['Troy', 'Life Style', 'Torronto', 'Terminator'];
            let desiredBook = 'Sad But True';
            assert(library.findBook(booksArr, desiredBook) == 'The book you are looking for is not here!');
        });
    });
    describe("Function arrangeTheBooks Tests", function () {
        it("Should throw error if countBooks is not an integer", function () {
            let countBooks = 'Troy';
            expect(() => library.arrangeTheBooks(countBooks)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks([])).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks({})).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(null)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(undefined)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(NaN)).to.throw(Error, 'Invalid input');
        });
        it("Should throw error if countBooks is less than zero", function () {
            let countBooks = -1;
            expect(() => library.arrangeTheBooks(countBooks)).to.throw(Error, 'Invalid input');
        });
        it("Should returns a message if all the books are arranged ", function () {
            let countBooks = 0;
            assert(library.arrangeTheBooks(countBooks) == 'Great job, the books are arranged.');
            assert(library.arrangeTheBooks(39) == 'Great job, the books are arranged.');
            assert(library.arrangeTheBooks(40) == 'Great job, the books are arranged.');
        });
        it("Should returns a message if no space to arrange all books", function () {
            let countBooks = 41;
            assert(library.arrangeTheBooks(countBooks) == 'Insufficient space, more shelves need to be purchased.');
        });
    });
});
