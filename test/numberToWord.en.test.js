const assert = require('assert')
const numberToWord = require('../numberToWord.en.js')

const equal = (no, text) => () => assert.equal(numberToWord(no), text)

describe('en units', () => {
    it('0 should translate to zero', equal(0, 'zero'))
    it('1 should translate to one', equal(1, 'one'))
    it('5 should translate to five', equal(5, 'five'))
    it('9 should translate to nine', equal(9, 'nine'))
})

describe('en decades', () => {
    it('10', equal(10, 'ten'))
    it('11', equal(11, 'eleven'))
    it('15', equal(15, 'fifteen'))
    it('18', equal(18, 'eighteen'))
    it('20', equal(20, 'twenty'))
    it('23', equal(23, 'twentythree'))
    it('30', equal(30, 'thirty'))
    it('37', equal(37, 'thirtyseven'))
    it('40', equal(40, 'fourty'))
    it('90', equal(90, 'ninety'))
    it('99', equal(99, 'ninetynine'))
})

describe('en hundreds', () => {
    it('100', equal(100, 'hundred'))
    it('101', equal(101, 'one hundred and one'))
    it('111', equal(111, 'one hundred and eleven'))
    it('224', equal(224, 'two hundred and twentyfour'))
    it('999', equal(999, 'nine hundred and ninetynine'))
})

describe('en thousands', () => {
    it('1000', equal(1000, 'one thousand'))
    it('1111', equal(1111, 'one thousand one hundred and eleven'))
    it('1183', equal(1183, 'one thousand one hundred and eightythree'))
    it('2719', equal(2719, 'two thousand seven hundred and nineteen'))
    it('8765', equal(8765, 'eight thousand seven hundred and sixtyfive'))
    it('9999', equal(9999, 'nine thousand nine hundred and ninetynine'))
})

describe('en millons', () => {
    it('1000000', equal(1000000, 'one million'))
    it('7000000', equal(7000000, 'seven millions'))
    it('1111111', equal(1111111, 'one million one hundred and eleven thousand one hundred and eleven'))
    it('1234567', equal(1234567, 'one million two hundred and thirtyfour thousand five hundred and sixtyseven'))
    it('8612910', equal(8612910, 'eight millions six hundred and twelve thousand nine hundred and ten'))
    it('1200000', equal(1200000, 'one million two hundred thousand'))
    it('1220000', equal(1220000, 'one million two hundred and twenty thousand'))
    it('1515015', equal(15015015, 'fifteen millions fifteen thousand fifteen'))
})

describe('en milliard', () => {
    it('1000000000', equal(1000000000, 'one billion'))
    it('3333333333', equal(3333333333, 'three billion three hundred and thirtythree millions three hundred and thirtythree thousand three hundred and thirtythree'))
    it('7621559045', equal(7621559045, 'seven billion six hundred and twentyone millions five hundred and fiftynine thousand fourtyfive'))
    it('9999999999', equal(9999999999, 'nine billion nine hundred and ninetynine millions nine hundred and ninetynine thousand nine hundred and ninetynine'))
})

describe('en billions', () => {
    it('1000000000000', equal(1000000000000, 'one trillion'))
    it('7000000000003', equal(7000000000003, 'seven trillions three'))
    it('1234567890123', equal(1234567890123, 'one trillion two hundred and thirtyfour billion five hundred and sixtyseven millions eight hundred and ninety thousand one hundred and twentythree'))
})

describe('en decimals', () => {
    it('0.01', equal(0.01, 'zero dot one'))
    it('1.121', equal(1.121, 'one dot one hundred and twentyone'))
    it('1.1234567890123', equal(1.1234567890123, 'one dot one trillion two hundred and thirtyfour billion five hundred and sixtyseven millions eight hundred and ninety thousand one hundred and twentythree'))
})

