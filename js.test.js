const fn = require('./fn')


// test('1 = 1', () => {
//     expect(1).toBe(1)
// })

// test('2 + 3 = 5', () => {
//     expect(fn.add(2, 3)).toBe(5)
// }) 

// test('3 + 3 = 6', () => {
//     expect(fn.add(3, 3)).toEqual(6)
// })

// test('3 + 3 != 3', () => {
//     expect(fn.add(3, 3)).not.toBe(3)
// })


test(`makeUser('tom', 10)`, () => {
    expect(fn.makeUser('tom', 10)).toEqual({
        name: 'tom',
        age: 10
    })
})

test(`makeUser('tom', 10)`, () => {
    expect(fn.makeUser('tom', 10)).toStrictEqual({
        name: 'tom',
        age: 10
    })
})