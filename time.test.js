const time = require('./time');

test('add two numbers', () => {
    expect(time.add(5, 5)).toBe(10);
});