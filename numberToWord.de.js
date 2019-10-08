const H = require('./helpers.js')

const UNITS = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun' ]
const units = (number) => UNITS[number]

const decade1 = (unit, units) => {
    if (unit <= 2) return ['zehn', 'elf', 'zwölf'][unit]
    if (unit === 6) return `sechzehn`
    if (unit === 7) return `siebzehn`
    return `${UNITS[unit]}zehn`
}

const DECADES2 =  ['zwanzig', 'dreissig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig']
const deacadesAnd = (decade, unit) => unit > 0 ? `${units(unit)}und${DECADES2[decade]}` : DECADES2[decade]
const decades = (number) => {
    const [decade, unit] = H.splitFloat(number, 10)
    switch (decade) {
        case 0: return units(number)
        case 1: return decade1(unit, units)
        default: return deacadesAnd(decade - 2, unit)
    }
}

const hundreds = number => {
    const [hundreds, decs] = H.splitFloat(number, 100)
    if (hundreds === 0) return decades(number)
    if (hundreds === 1) return decs === 0 ? 'hundert' : `ein hundert ${decades(decs)}`
    return `${UNITS[hundreds]} hundert ${decades(decs)}`
}

const thousands = number => H.makeBiggerWord(number, 1000, hundreds, 'ein tausend', 'tausend')
const millions = number => H.makeBiggerWord(number, 1000000, thousands, 'eine million', 'millionen')
const milliards = number => H.makeBiggerWord(number, 1000000000, millions, 'eine billion', 'billionen')
const billions = number => H.makeBiggerWord(number, 1000000000000, milliards, 'eine trillion', 'trillionen')

module.exports = number => {
    if (number > 9999999999999) throw 'The number is too big, we have no words for this'
    var decimal = (number + '').split('.')[1]
    if (decimal) return `${billions(Math.floor(number))} komma ${billions(decimal)}`
    return billions(number)
}
