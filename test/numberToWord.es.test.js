import assert from 'assert'
import numberToWord from '../numberToWord.es.js'

const equal = (no, text) => () => assert.equal(numberToWord(no), text)

describe('es units', () => {
    it('0 should translate to zero', equal(0, 'zero'))
    it('1', equal(1, 'uno'))
    it('5', equal(5, 'cinco'))
    it('9', equal(9, 'nueve'))
})

describe('es decades', () => {
    it('10', equal(10, 'diez'))
    it('11', equal(11, 'once'))
    it('18', equal(18, 'dieciocho'))
    it('20', equal(20, 'veinte'))
    it('23', equal(23, 'veintitres'))
    it('30', equal(30, 'treinta'))
    it('37', equal(37, 'treinta y siete'))
    it('40', equal(40, 'cuarenta'))
    it('90', equal(90, 'noventa'))
    it('99', equal(99, 'noventa y nueve'))
})

describe('es hundreds', () => {
    it('100', equal(100, 'cien'))
    it('101', equal(101, 'cientouno'))
    it('111', equal(111, 'cientoonce'))
    it('224', equal(224, 'doscientosveinticuatro'))
    it('999', equal(999, 'novecientosnoventa y nueve'))
})

describe('es thousands', () => {
    it('1000', equal(1000, 'un mil'))
    it('1111', equal(1111, 'un mil cientoonce'))
    it('1183', equal(1183, 'un mil cientoochenta y tres'))
    it('2719', equal(2719, 'dos mil setecientosdiecinueve'))
    it('8765', equal(8765, 'ocho mil setecientossesenta y cinco'))
    it('9999', equal(9999, 'nueve mil novecientosnoventa y nueve'))
    it('9999', equal(99999, 'noventa y nueve mil novecientosnoventa y nueve'))
    it('9999', equal(999999, 'novecientosnoventa y nueve mil novecientosnoventa y nueve'))
})

describe('es millons', () => {
    it('1000000', equal(1000000, 'un millon'))
    it('7000000', equal(7000000, 'siete millones'))
    it('1111111', equal(1111111, 'un millon cientoonce mil cientoonce'))
    it('1234567', equal(1234567, 'un millon doscientostreinta y cuatro mil quinientossesenta y siete'))
    it('8612910', equal(8612910, 'ocho millones seiscientosdoce mil novecientosdiez'))
})

describe('es milliard', () => {
    it('1000000000', equal(1000000000, 'un millardo'))
    it('3333333333', equal(3333333333, 'tres millardos trescientostreinta y tres millones trescientostreinta y tres mil trescientostreinta y tres'))
    it('7621559045', equal(7621559045, 'siete millardos seiscientosveintiuno millones quinientoscincuenta y nueve mil cuarenta y cinco'))
    it('9999999999', equal(9999999999, 'nueve millardos novecientosnoventa y nueve millones novecientosnoventa y nueve mil novecientosnoventa y nueve'))
})

describe('es billions', () => {
    it('1000000000000', equal(1000000000000, 'un billón'))
    it('7000000000003', equal(7000000000003, 'siete billones tres'))
    it('1234567890123', equal(1234567890123, 'un billón doscientostreinta y cuatro millardos quinientossesenta y siete millones ochocientosnoventa mil cientoveintitres'))
})

describe('es decimals', () => {
    it('0.01', equal(0.01, 'zero con uno'))
    it('1.121', equal(1.121, 'uno con cientoveintiuno'))
    it('1.1234567890123', equal(1.1234567890123, 'uno con un billón doscientostreinta y cuatro millardos quinientossesenta y siete millones ochocientosnoventa mil cientoveintitres'))
})
