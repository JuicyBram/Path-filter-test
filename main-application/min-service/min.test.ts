import { min, minArray } from './min';

test('subtracts 3 - 2 to equal 1', () => {
  expect(min(3, 2)).toBe(1);
});

test('subtracts an array of 3 numbers', () => {
  expect(minArray([1, 2, 3])).toBe(-6);
});
