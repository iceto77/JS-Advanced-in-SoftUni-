const numberOperations = require("./numberOperationsResources");
const { assert } = require('chai');
const { expect } = require('chai');


describe("Function numberOperations Tests", function () {
    describe("powNumber(num) Tests", function () {
        it("Return corect pow for positive numbers", function () {
            expect(numberOperations.powNumber(2)).to.be.equal(4);
        });
    });
    describe("numberChecker(input) Tests", function () {
        it("Throw error when input is not number", function () {
            expect(() => numberOperations.numberChecker('aaa')).to.throw(Error, 'The input is not a number!');
        });
        it("Work corect with numbers less than 100", function () {
            expect(numberOperations.numberChecker(22)).to.be.equal('The number is lower than 100!');
        });
        it("Work corect with numbers less than  or euqal 100", function () {
            expect(numberOperations.numberChecker(150)).to.be.equal('The number is greater or equal to 100!');
        });
        it("Parse corect ", function () {
            expect(numberOperations.numberChecker('100')).to.be.equal('The number is greater or equal to 100!');
        });
    });
    describe("sumArrays(array1, array2) Tests", function () {
        it("Function work when arrays has same lenght", function () {
            expect(numberOperations.sumArrays([1, 2, 3], [8, 7, 6])).to.deep.equal([9, 9, 9]);
        });
        it("Function work when arrays has diferent lenght", function () {
            expect(numberOperations.sumArrays([1, 2, 3, 4], [8, 7, 6])).to.deep.equal([9, 9, 9, 4]);
        });
        it("Function work when arrays has diferent lenght >", function () {
            expect(numberOperations.sumArrays([1, 2, 3, 4], [8, 7, 6])).to.deep.equal([9, 9, 9, 4]);
        });
    });
});
