import { sumar } from './sumar';

test('suma dos números', () => {
  expect(sumar(2, 3)).toBe(5);
});