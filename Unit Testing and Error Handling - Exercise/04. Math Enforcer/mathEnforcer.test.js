const mathEnforcer = require('./mathEnforcer');
const { assert } = require('chai');
describe('mathEnforcer function tests', () => {
    describe('add five function tests', () => {
        it('Should return indefined with string', ()=>{
            assert(mathEnforcer.addFive('TEST') === undefined);
        });
        it('Should return indefined with array', ()=>{
            assert(mathEnforcer.addFive([]) === undefined);
        });
        it('Should return indefined with object', ()=>{
            assert(mathEnforcer.addFive({}) === undefined);
        });
        it('Should return indefined with undefined', ()=>{
            assert(mathEnforcer.addFive(undefined) === undefined);
        });
        it('Should return indefined with null', ()=>{
            assert(mathEnforcer.addFive(null) === undefined);
        });

        it('Positive integer number +5', ()=>{
            assert(mathEnforcer.addFive(5) === 10);
        });        
        it('Positive negativ number +5', ()=>{
            assert(mathEnforcer.addFive(-5) === 0);
        });
        it('Decimal integer number +5', ()=>{
            assert(mathEnforcer.addFive(5.5) === 10.5);
        });
    });
    describe('substract function tests', () => {
        it('Should return indefined with string', ()=>{
            assert(mathEnforcer.subtractTen('TEST') === undefined);
        });
        it('Should return indefined with array', ()=>{
            assert(mathEnforcer.subtractTen([]) === undefined);
        });
        it('Should return indefined with object', ()=>{
            assert(mathEnforcer.subtractTen({}) === undefined);
        });
        it('Should return indefined with undefined', ()=>{
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });
        it('Should return indefined with null', ()=>{
            assert(mathEnforcer.subtractTen(null) === undefined);
        });

        it('Positive integer number -10', ()=>{
            assert(mathEnforcer.subtractTen(5) === -5);
        });        
        it('Positive negativ number -10', ()=>{
            assert(mathEnforcer.subtractTen(-5) === -15);
        });
        it('Decimal integer number -10', ()=>{
            assert(mathEnforcer.subtractTen(15.5) === 5.5);
        })
    });
    describe('sum function tests', () => {
        it('Work with 2 positive integer numbers', ()=>{
            assert(mathEnforcer.sum(10, 20) === 30);
        })
        it('Work with 2 negative integer numbers', ()=>{
            assert(mathEnforcer.sum(-10, -2.5) === -12.5);
        })
        it('Work with 2 decimal numbers', ()=>{
            assert(mathEnforcer.sum(10.5, 2.1) === 12.6);
        })

        it('First string, socond number', ()=>{
            assert(mathEnforcer.sum('', 20) === undefined);
        })
        it('First number, socond string', ()=>{
            assert(mathEnforcer.sum(20, '') === undefined);
        })
    });
});