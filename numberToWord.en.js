const H = require('./helpers.js')

const UNITS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ]
const units = (number) => UNITS[number]

const decade1 = (unit, units) => {
    if (unit <= 2) return ['ten', 'eleven', 'twelve'][unit]
    if (unit === 3) return `thirteen`
    if (unit === 8) return `eighteen`
    return `${UNITS[unit]}teen`
}

const DECADES2 =  ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const deacadesAnd = (decade, unit) => unit > 0 ? `${DECADES2[decade]}${units(unit)}` : DECADES2[decade]
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
    if (hundreds === 1) return decs === 0 ? 'hundred' : `one hundred and ${decades(decs)}`
    if (decs === 0) return `${UNITS[hundreds]} hundred`
    return `${UNITS[hundreds]} hundred and ${decades(decs)}`
}

const thousands = number => H.makeBiggerWord(number, 1000, hundreds, 'one thousand', 'thousand')
const millions = number => H.makeBiggerWord(number, 1000000, thousands, 'one million', 'millions')
const milliards = number => H.makeBiggerWord(number, 1000000000, millions, 'one billion', 'billion')
const billions = number => H.makeBiggerWord(number, 1000000000000, milliards, 'one trillion', 'trillions')

module.exports = number => {
    if (number > 9999999999999) throw 'The number is too big, we have no words for this'
    var decimal = (number + '').split('.')[1]
    if (decimal) return `${billions(Math.floor(number))} dot ${billions(decimal)}`
    return billions(number)
}
