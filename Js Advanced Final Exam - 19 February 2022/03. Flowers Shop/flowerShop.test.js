let flowerShop  = require("./flowerShop");
let { expect } = require('chai');
let { assert } = require('chai');

describe("Flower Shop Tests", function() {
    describe("Function calcPriceOfFlowers tests", function() {
        it("Throw error if input flower is not a string", function() {
            expect(() => flowerShop.calcPriceOfFlowers(2323, 23, 45)).to.throw(Error, 'Invalid input!');
        });
        it("Throw error if input price is not a number", function() {
            expect(() => flowerShop.calcPriceOfFlowers('rose', 'hjhj', 45)).to.throw(Error, 'Invalid input!');
        });
        it("Throw error if input quantity is not a number", function() {
            expect(() => flowerShop.calcPriceOfFlowers('rose', 2, '45')).to.throw(Error, 'Invalid input!');
        });
        it("Return corect price, rounded to the second digits", function() {
            expect(flowerShop.calcPriceOfFlowers('roce', 5, 10)).to.be.equal('You need $50.00 to buy roce!');
        });
     });
     describe("Function checkFlowersAvailable tests", function() {
        it("Return available, is input flower is exsist in array", function() {
            expect(flowerShop.checkFlowersAvailable('Rose' ,["Rose", "Lily", "Orchid"])).to.be.equal('The Rose are available!');
        });
        it("Return available, is input flower is exsist in array", function() {
            expect(flowerShop.checkFlowersAvailable('Tulip' ,["Rose", "Lily", "Orchid"])).to.be.equal('The Tulip are sold! You need to purchase more!');
        });

     });    describe("Function sellFlowers tests", function() {
        it("Return string with exsisting flowers if input is corekt", function() {
            expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1)).to.be.equal('Rose / Orchid');
        });
        it("Throw error if input space is less than zero", function() {
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], -1)).to.throw(Error, 'Invalid input!');
        });
        it("Throw error if input space is greater or equal to length of array", function() {
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 3)).to.throw(Error, 'Invalid input!');
        });
        it("Throw error if input space is not a number", function() {
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 'as')).to.throw(Error, 'Invalid input!');
        });
        it("Throw error if input array is not array", function() {
            expect(() => flowerShop.sellFlowers('Rose', 3)).to.throw(Error, 'Invalid input!');
        });

     });
});
