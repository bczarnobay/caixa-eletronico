const models = require('../src/models.js')

test('there should be 4 bills available for withdrawn', () => {
    expect(models.notas.length).toBe(4)
})
