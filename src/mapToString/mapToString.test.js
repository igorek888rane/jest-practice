const mapToString = require('./mapToString')


describe('mapToString', () => {
    test('Коректное значение', () => {
        expect(mapToString([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test('Некоректное значение', () => {
        expect(mapToString([1, 2, 3,null,undefined,'asd'])).toEqual(['1', '2', '3'])
    })
    test('Пустой массив', () => {
        expect(mapToString([])).toEqual([])
    })
    test('Отрицание', () => {
        expect(mapToString([1, 2, 3])).not.toEqual([1,2,3,4])
    })
})