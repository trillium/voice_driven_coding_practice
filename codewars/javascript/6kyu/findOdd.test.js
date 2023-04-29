import { test, expect } from 'vitest'
import { findOdd } from './findOdd.js'

test('Example tests', () => {
  expect(findOdd([7])).toBe(7)
  expect(findOdd([0])).toBe(0)
  expect(findOdd([1, 1, 2])).toBe(2)
  expect(findOdd([0, 1, 0, 1, 0])).toBe(0)
  expect(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4)
})

test('Fixed tests', () => {
  expect(
    findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
  ).toBe(5)
  expect(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).toBe(-1)
  expect(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])).toBe(5)
  expect(findOdd([10])).toBe(10)
  expect(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])).toBe(10)
  expect(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])).toBe(1)
})
