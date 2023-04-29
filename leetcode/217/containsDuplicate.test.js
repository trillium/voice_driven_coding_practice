import { test, expect } from 'vitest'
import { containsDuplicate } from './containsDuplicate.js'

test('passes simple', () => {
  expect(containsDuplicate([1, 1, 2])).toBe(true)
  expect(containsDuplicate([1, 2])).toBe(false)
  expect(
    containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  ).toBe(false)
})
