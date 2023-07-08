import { test, expect } from 'vitest'
import { positiveSum } from './positiveSum'

test('handle some tests', () => {
  expect(positiveSum([])).toBe(0)
  expect(positiveSum([1])).toBe(1)
  expect(positiveSum([-1])).toBe(0)
  expect(positiveSum([1, 2, 3, 4, 5])).toBe(15)
  expect(positiveSum([1, -2, 3, 4, 5])).toBe(13)
  expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0)
  expect(positiveSum([-1, 2, 3, 4, -5])).toBe(9)
})
