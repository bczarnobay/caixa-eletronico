const models = require('../src/models.js')

describe('checking models consistency', () => {
    it('there should be 4 bills available for withdrawn', () => {
        expect(models.notas.length).toBe(4)
    })
    it('output structure should not have values', () => {
        expect(models.output.total).toBe(0)
        expect(models.output[10]).toBe(0)
        expect(models.output[20]).toBe(0)
        expect(models.output[50]).toBe(0)
        expect(models.output[100]).toBe(0)
    })
})