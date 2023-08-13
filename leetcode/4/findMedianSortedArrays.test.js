import { test, expect } from 'vitest'
import { findMedianSortedArrays } from './findMedianSortedArrays'

test('handle some tests', () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2)
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5)
})
