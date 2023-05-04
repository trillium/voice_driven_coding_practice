import { test, expect } from 'vitest'
import { isSquare } from './isSquare.js'

test('should work for some examples', () => {
  expect(isSquare(-1)).toBe(false) // "-1: Negative numbers cannot be square numbers");
  expect(isSquare(0)).toBe(true) // "0 is a square number (0 * 0)");
  expect(isSquare(3)).toBe(false) // "3 is not a square number");
  expect(isSquare(4)).toBe(true) // "4 is a square number (2 * 2)");
  expect(isSquare(25)).toBe(true) // "25 is a square number (5 * 5)");
  expect(isSquare(26)).toBe(false) // "26 is not a square number");
})
