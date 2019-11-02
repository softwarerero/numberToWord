const assert = require('assert')
const { numberToOrdinal, numberToWord } = require('../index.js')

describe('numberToOrdinal', () => {
    it('numberToOrdinal speaks no Danish', () => { 
        const fn = () => numberToOrdinal(987, 'dk')
        assert.throws(fn, Error, 'Language dk not supported')
    })
    it('es is the default language', () => { 
        assert.equal(numberToOrdinal(40), 'cuadragésima')
    })
})

describe.only('numberToWord', () => {
    const equal = (no, text, language) => () => assert.equal(numberToWord(no, language), text)

    it('numberToWord speaks no Danish', () => { 
        const fn = () => numberToWord(987, 'dk')
        assert.throws(fn, Error, 'Language dk not supported')
    })
    it('es is the default language', equal(40, 'cuarenta'))
    it('40 in Spanish is cuarenta', equal(40, 'cuarenta', 'es'))
    it('40 in English is fourty', equal(40, 'fourty', 'en'))
    it('40 in German is vierzig', equal(40, 'vierzig', 'de'))
})
