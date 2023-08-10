import { test, expect } from 'vitest'
import { reverse } from './reverse'

test('handle some tests', () => {
  expect(reverse(1)).toBe(1)
  expect(reverse(21)).toBe(12)
  expect(reverse(123)).toBe(321)
  expect(reverse(-21)).toBe(-12)
  expect(reverse(0)).toBe(0)
  expect(reverse(1534236469)).toBe(0) // outside range [-2^31, 2^31 - 1]
})
