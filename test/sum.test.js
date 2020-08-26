// Add the unit tests of the sum function here

describe('Sum', function() {

    const sum = require('../src/sum');

    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('invalid arguments', () => {
        expect(() => {
            sum(1, "x");
        }).toThrow();
    });
});