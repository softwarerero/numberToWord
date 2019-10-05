export const splitFloat = (float, devider = 1) => {
    const integer = Math.floor(float / devider)
    const decimal = float - (integer * devider)
    return [integer, decimal]
} 

export const section = (number, divider, makeSmallerWord, singular, plural) => {
    const [integer, float] = splitFloat(number, divider)
    if (integer > 0) {
        if (integer > 1) return `${makeSmallerWord(integer)} ${plural}`
        return singular
    }
    return ''
}

export const makeBiggerWord = (number, divider, makeSmallerWord, singular, plural) => {
    const [integer, float] = splitFloat(number, divider)
    const word1 = section(number, divider, makeSmallerWord, singular, plural)
    const word2 = makeSmallerWord(float)
    if (word1 === '') return word2
    if (float === 0) return word1
    return `${word1} ${word2}`
}
