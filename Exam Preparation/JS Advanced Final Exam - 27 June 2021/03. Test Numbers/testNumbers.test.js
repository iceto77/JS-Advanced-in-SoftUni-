let testNumbers  = require("./testNumbers");
let { expect } = require('chai');
let { assert } = require('chai');


describe("Object 'testNumbers' Tests", function() {
    describe("Property 'sumNumber; Tests", function() {
        it("Should input parameters will be numbers", function() {
            expect(testNumbers.sumNumbers(1,2)).is.not.equal(undefined);            
            expect(testNumbers.sumNumbers(0,0)).is.not.equal(undefined);            
            expect(testNumbers.sumNumbers(-1,1)).is.not.equal(undefined);            
            expect(testNumbers.sumNumbers(1,-1)).is.not.equal(undefined);            
        });
        it("Should return undefined if any parameter is not number", function() {           
            expect(testNumbers.sumNumbers('a',1)).is.equal(undefined);
            expect(testNumbers.sumNumbers(1,'a')).is.equal(undefined);
            expect(testNumbers.sumNumbers('a', 'b')).is.equal(undefined);
            expect(testNumbers.sumNumbers(undefined, 1)).is.equal(undefined);
            expect(testNumbers.sumNumbers(1,undefined)).is.equal(undefined);
        });
    });
    describe("Property 'numberChecker; Tests", function() {
        it("Should throw error if input is not a number", function () {
            expect(() => testNumbers.numberChecker('fefef')).to.throw(Error, 'The input is not a number!');
        });
        it("Should parses the input to number", function () {
            expect(testNumbers.numberChecker('22')).is.equal('The number is even!');
        });
        it("Should return if is odd!", function () {
            expect(testNumbers.numberChecker(911)).is.equal('The number is odd!');
        });
    });
    describe("Property 'averageSumArray; Tests", function() {
        it("Should return corect sum", function () {
            expect(testNumbers.averageSumArray([1, 2, 3])).is.equal(2);
        });
    });
});
