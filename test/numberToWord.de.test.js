import assert from 'assert'
import numberToWord from '../numberToWord.de.js'

const equal = (no, text) => () => assert.equal(numberToWord(no), text)

describe('en units', () => {
    it('0 should translate to zero', equal(0, 'null'))
    it('1 should translate to one', equal(1, 'eins'))
    it('5 should translate to five', equal(5, 'fünf'))
    it('9 should translate to nine', equal(9, 'neun'))
})

describe('en decades', () => {
    it('10', equal(10, 'zehn'))
    it('11', equal(11, 'elf'))
    it('18', equal(18, 'achtzehn'))
    it('20', equal(20, 'zwanzig'))
    it('23', equal(23, 'dreiundzwanzig'))
    it('30', equal(30, 'dreissig'))
    it('37', equal(37, 'siebenunddreissig'))
    it('40', equal(40, 'vierzig'))
    it('90', equal(90, 'neunzig'))
    it('99', equal(99, 'neunundneunzig'))
})

describe('en hundreds', () => {
    it('100', equal(100, 'hundert'))
    it('101', equal(101, 'ein hundert eins'))
    it('111', equal(111, 'ein hundert elf'))
    it('224', equal(224, 'zwei hundert vierundzwanzig'))
    it('999', equal(999, 'neun hundert neunundneunzig'))
})

describe('en thousands', () => {
    it('1000', equal(1000, 'ein tausend'))
    it('1111', equal(1111, 'ein tausend ein hundert elf'))
    it('1183', equal(1183, 'ein tausend ein hundert dreiundachtzig'))
    it('2719', equal(2719, 'zwei tausend sieben hundert neunzehn'))
    it('8765', equal(8765, 'acht tausend sieben hundert fünfundsechzig'))
    it('9999', equal(9999, 'neun tausend neun hundert neunundneunzig'))
})

describe('en millons', () => {
    it('1000000', equal(1000000, 'eine million'))
    it('7000000', equal(7000000, 'sieben millionen'))
    it('1111111', equal(1111111, 'eine million ein hundert elf tausend ein hundert elf'))
    it('1234567', equal(1234567, 'eine million zwei hundert vierunddreissig tausend fünf hundert siebenundsechzig'))
    it('8612910', equal(8612910, 'acht millionen sechs hundert zwölf tausend neun hundert zehn'))
})

describe('en milliard', () => {
    it('1000000000', equal(1000000000, 'eine billion'))
    it('3333333333', equal(3333333333, 'drei billionen drei hundert dreiunddreissig millionen drei hundert dreiunddreissig tausend drei hundert dreiunddreissig'))
    it('7621559045', equal(7621559045, 'sieben billionen sechs hundert einsundzwanzig millionen fünf hundert neunundfünfzig tausend fünfundvierzig'))
    it('9999999999', equal(9999999999, 'neun billionen neun hundert neunundneunzig millionen neun hundert neunundneunzig tausend neun hundert neunundneunzig'))
})

describe('en billions', () => {
    it('1000000000000', equal(1000000000000, 'eine trillion'))
    it('7000000000003', equal(7000000000003, 'sieben trillionen drei'))
    it('1234567890123', equal(1234567890123, 'eine trillion zwei hundert vierunddreissig billionen fünf hundert siebenundsechzig millionen acht hundert neunzig tausend ein hundert dreiundzwanzig'))
})

describe('en decimals', () => {
    it('0.01', equal(0.01, 'null komma eins'))
    it('1.121', equal(1.121, 'eins komma ein hundert einsundzwanzig'))
    it('1.1234567890123', equal(1.1234567890123, 'eins komma eine trillion zwei hundert vierunddreissig billionen fünf hundert siebenundsechzig millionen acht hundert neunzig tausend ein hundert dreiundzwanzig'))
})
