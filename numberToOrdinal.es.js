const esNumberWords = [
	['', 'primera', 'segunda', 'tercera', 'cuarta', 'quinta', 'sexta', 'septima', 'octava', 'novena'],
	['', 'decima', 'vigésima', 'trigésima', 'cuadragésima', 'quincuagésima', 'sexagésimo',
		'septuagésima', 'octogésima', 'nonagésima'],
	['', 'centésima'],
]


module.exports = number => {
    if (number > 199) throw new Error('The number is too big, we have no words for this')
    return number
        .toString()
        .split('').
        reverse()
        .map((n, i) => esNumberWords[i][n] || esNumberWords[i][0])
        .reverse()
        .join(' ')
        .trim()
}
