const assert = require('assert')
const numberToOrdinal = require('../numberToOrdinal.es.js')

const equal = (no, text) => () => assert.equal(numberToOrdinal(no), text)

describe('es units', () => {
    it('1', equal(1, 'primera'))
    it('5', equal(5, 'quinta'))
    it('9', equal(9, 'novena'))
    it('11', equal(11, 'decima primera'))
    it('111', equal(111, 'centésima decima primera'))
    it('123', equal(123, 'centésima vigésima tercera'))
    it('987', () => { 
        const fn = () => numberToOrdinal(987)
        assert.throws(fn, Error, 'The number is too big, we have no words for this')
    })
})
