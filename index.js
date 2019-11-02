const numberToOrdinalEs = require('./numberToOrdinal.es.js') 
const numberToWordMap = {
    es: require('./numberToWord.es.js'),
    en: require('./numberToWord.en.js'),
    de: require('./numberToWord.de.js'),
}

const languageNotSupported = (language) => {
    throw Error(`Language ${language} not supported`)
}

module.exports.numberToOrdinal = (number, language = 'es') => {
    if (language.toLocaleLowerCase().startsWith('es')) return numberToOrdinalEs(number)
    languageNotSupported(language)
}

module.exports.numberToWord = (number, language = 'es') => {
    const lang = language.toLocaleLowerCase().substring(0, 2)
    const fn = numberToWordMap[language]
    if (!fn) return languageNotSupported(language)
    return fn(number)
}