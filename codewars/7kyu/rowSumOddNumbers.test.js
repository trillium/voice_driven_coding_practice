import { test, expect } from 'vitest'
import { rowSumOddNumbers } from './rowSumOddNumbers.js'

test('should work for some examples', () => {
  expect(rowSumOddNumbers(1)).toBe(1)
  expect(rowSumOddNumbers(42)).toBe(74088)
})
