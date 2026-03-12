import { min } from '../min-service/min';

test('subtracts 3 - 2 to equal 1', () => {
  expect(min(3, 2)).toBe(1);
});