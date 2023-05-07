import { test, expect } from 'vitest'
import { sumTwoSmallestNumbers } from './sumTwoSmallestNumbers.js'

test('should work for some examples', () => {
  expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toBe(13) // "-1: Negative numbers cannot be square numbers");
  expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toBe(6) // "0 is a square number (0 * 0)");
  expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).toBe(10) // "3 is not a square number");
  expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toBe(24) // "4 is a square number (2 * 2)");
  expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).toBe(16) // "25 is a square number (5 * 5)");
})
