const validateValue = require('./validateValue')





describe('validateValue',()=>{
    test('Валидация значений',()=>{
        expect(validateValue(50)).toBe(true)
    })
    test('Меньше коректного',()=>{
        expect(validateValue(-1)).toBe(false)
    })
    test('Больше коретного',()=>{
        expect(validateValue(101)).toBe(false)
    })
    test('Нижняя граница ',()=>{
        expect(validateValue(0)).toBe(true)
    })
    test('Верхняя граница',()=>{
        expect(validateValue(100)).toBe(true)
    })
})