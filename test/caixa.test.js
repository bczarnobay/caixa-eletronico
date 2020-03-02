const caixa = require('../src/caixa.js')

test('withdrawing 0 should return false', () => {
    expect(caixa.getNotas(0)).toBeFalsy()
})

test('withdrawing a value that is not divisible by 10 should return false', () => {
    expect(caixa.getNotas(15)).toBeFalsy()
})

test('entering a character other than a number should return false', () => {
    expect(caixa.getNotas('a')).toBeFalsy()
}) 

test('withdrawing 200 should return 2', () => {
    expect(caixa.getNotas(200)).toBe(2)
})

test('withdrawing 170 should return 3', () => {
    expect(caixa.getNotas(170)).toBe(3)
})