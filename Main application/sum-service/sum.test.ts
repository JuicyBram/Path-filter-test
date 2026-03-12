import { sum, sumArray } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sums an array of numbers', () => {
  expect(sumArray([1, 2, 3])).toBe(6);
});