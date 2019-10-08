const H = require('./helpers.js')

const UNITS = ['zero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']
const units = (number) => UNITS[number]

const DECADES1 = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieci']
const DECADES2 =  ['veinte', 'veinti']
const DECADES3 =  ['treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa']
const decade1 = (unit, units) => unit >= 5 ? `${DECADES1[6]}${units(unit, this)}` : DECADES1[unit]

const deacadesAnd = (decade, unit) => unit > 0 ? `${DECADES3[decade]} y ${units(unit)}` : DECADES3[decade]
const decades = (number) => {
    const [decade, unit] = H.splitFloat(number, 10)
    switch (decade) {
        case 0: return units(number)
        case 1: return decade1(unit, units)
        case 2: return unit === 0 ? DECADES2[0] : `${DECADES2[1]}${units(unit)}`
        default: return deacadesAnd(decade - 3, unit)
    }
}

const HUNDREDS = ['ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos']
const hundreds = number => {
    const [hundreds, decs] = H.splitFloat(number, 100)
    if (hundreds === 0) return decades(number)
    if (hundreds === 1) return decs === 0 ? 'cien' : `ciento${decades(decs)}`
    return `${HUNDREDS[hundreds - 1]}${decades(decs)}`
}

const thousands = number => H.makeBiggerWord(number, 1000, hundreds, 'un mil', 'mil')
const millions = number => H.makeBiggerWord(number, 1000000, thousands, 'un millon', 'millones')
const milliards = number => H.makeBiggerWord(number, 1000000000, millions, 'un millardo', 'millardos')
const billions = number => H.makeBiggerWord(number, 1000000000000, milliards, 'un billón', 'billones')

module.exports = number => {
    if (number > 9999999999999) throw 'The number is too big, we have no words for this'
    var decimal = (number + '').split('.')[1]
    if (decimal) return `${billions(Math.floor(number))} con ${billions(decimal)}`
    return billions(number)
}
