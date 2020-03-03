const caixa = require('../src/caixa.js')

describe('invalid values', () => {
    describe('withdrawing 0', () => {
        it('should return 0', () => {
            expect(caixa.getNotas(0)).toBe(0)
        })
    })

    describe('withdrawing a value that is not divisible by 10', () => {
        it(' should return 0', () => {
            expect(caixa.getNotas(15)).toBe(0)
        })
    })

    describe('entering a character other than a number', () => {
        it('should return 0', () => {
            expect(caixa.getNotas('a')).toBe(0)
        }) 
    })
})

describe('single bills', () => {
    describe('withdrawing 10', () => {
        const result = caixa.getNotas(10)
        it('should return a total of 1 bill', () => {
            expect(result.total).toBe(1)
        })
        it('should return one 10$ bill', () => {
            expect(result[10]).toBe(1)
        })
    })

    describe('withdrawing 20', () => {
        const result = caixa.getNotas(20)
        it('should return a total of 1 bill', () => {
            expect(result.total).toBe(1)
        })
        it('should return one 20$ bill', () => {
            expect(result[20]).toBe(1)
        })
    })

    describe('withdrawing 50', () => {
        const result = caixa.getNotas(50)
        it('should return a total of 1 bill', () => {
            expect(result.total).toBe(1)
        })
        it('should return one 50$ bill', () => {
            expect(result[50]).toBe(1)
        })
    })

    describe('withdrawing 100', () => {
        const result = caixa.getNotas(100)
        it('should return a total of 1 bill', () => {
            expect(result.total).toBe(1)
        })
        it('should return one 100$ bill', () => {
            expect(result[100]).toBe(1)
        })
    })
})

describe('more than one bill', () => {
    describe('withdrawing 200', () => {
        const result = caixa.getNotas(200)
        it('should return a total of 2 bills', () => {
            expect(result.total).toBe(2)
        })
        it('should return two 100$ bill', () => {
            expect(result[100]).toBe(2)
        })
    })
    describe('withdrawing 170', () => {
        const result = caixa.getNotas(170)
        it('should return a total of 3 bills', () => {
            expect(result.total).toBe(3)
        })
        it('should return one 100$ bill', () => {
            expect(result[100]).toBe(1)
        })
        it('should return one 50$ bill', () => {
            expect(result[50]).toBe(1)
        })
        it('should return one 20$ bill', () => {
            expect(result[20]).toBe(1)
        })
    })
    describe('withdrawing 380', () => {
        const result = caixa.getNotas(380)
        it('should return a total of 6 bills', () => {
            expect(result.total).toBe(6)
        })
        it('should return three 100$ bill', () => {
            expect(result[100]).toBe(3)
        })
        it('should return one 50$ bill', () => {
            expect(result[50]).toBe(1)
        })
        it('should return one 20$ bill', () => {
            expect(result[20]).toBe(1)
        })
        it('should return one 10$ bill', () => {
            expect(result[10]).toBe(1)
        })
    })
    describe('withdrawing 90', () => {
        const result = caixa.getNotas(90)
        it('should return a total of 3 bills', () => {
            expect(result.total).toBe(3)
        })
        it('should return one 50$ bill', () => {
            expect(result[50]).toBe(1)
        })
        it('should return two 20$ bill', () => {
            expect(result[20]).toBe(2)
        })
    })
    describe('withdrawing 1380', () => {
        const result = caixa.getNotas(1380)
        it('should return a total of 16 bills', () => {
            expect(result.total).toBe(16)
        })
        it('should return thirteen 100$ bill', () => {
            expect(result[100]).toBe(13)
        })
        it('should return one 50$ bill', () => {
            expect(result[50]).toBe(1)
        })
        it('should return one 20$ bill', () => {
            expect(result[20]).toBe(1)
        })
        it('should return one 20$ bill', () => {
            expect(result[10]).toBe(1)
        })
    })
})