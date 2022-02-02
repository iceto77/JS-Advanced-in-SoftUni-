const expect = require('chai').expect;
const sum = require('./sumOfNumbers');

describe('Sum of Numbers', () =>{
    it('Shuld work corectly', () =>{
        let numbers = [1,2,3,4,5];
        let actualSum = sum(numbers);
        let expectedSum = 15;
        expect(actualSum).to.equal(expectedSum);
    }) 
    it('Shuld return the sum with negative number in the array', () =>{
        let numbers = [1,2,3,4,-5];
        let actualSum = sum(numbers);
        let expectedSum = 5;
        expect(actualSum).to.equal(expectedSum);
    })
    it('Shuld return the zero when only zeroes are given', () =>{
        let numbers = [0,0,0,0,0];
        let actualSum = sum(numbers);
        let expectedSum = 0;
        expect(actualSum).to.equal(expectedSum);
    })
})