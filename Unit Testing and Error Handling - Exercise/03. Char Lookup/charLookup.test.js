const lookupChar = require('./charLookup');
const {assert} = require('chai');
describe('lookupChar function tests', () => {
    it('Return char to index',()=>{
        assert(lookupChar('Love',1)==='o');
    });
    it('Return one char to index',()=>{
        assert(lookupChar('L',0)==='L');
    });
    it('Index over the string length',()=>{
        assert(lookupChar('Love',10)==='Incorrect index');
    });
    it('Negative string index',()=>{
        assert(lookupChar('Love',-1)==='Incorrect index');
    });
    it('Empty string as input',()=>{
        assert(lookupChar('',0)==='Incorrect index');
    });
    it('Return undefined if first parameter is not string',()=>{
        assert(lookupChar(100,10)===undefined);
    });
    it('Return undefined with string firs, decimal second parameters',()=>{
        assert(lookupChar('Love',1.5)===undefined);
    });
    it('Return undefined with wrond parameters type',()=>{
        assert(lookupChar(3,'Love')===undefined);
    });
});