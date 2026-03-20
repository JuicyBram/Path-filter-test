import { sum, sumArray, hardCalculation } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sums an array of 3 numbers', () => {
  expect(sumArray([1, 2, 3])).toBe(6);
});

test('sums an array of 4 numbers', () => {
  expect(sumArray([1, 2, 3, 4])).toBe(10);
});


test('performs a hard calculation', () => {
  expect(hardCalculation(1, 2, 3)).toBe(7); // 1 + 2 * 3 = 7
});