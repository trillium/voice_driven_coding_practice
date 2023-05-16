import { test, expect } from 'vitest'
import { squareSum } from './squareSum.js'

test('Should handle empty array', () => {
  expect(squareSum([1, 2])).toBe(5)
  expect(squareSum([0, 3, 4, 5])).toBe(50)
  expect(squareSum([])).toBe(0)
})
