import { test, expect } from 'vitest'
import { isTriangle } from './isTriangle'

test('handle some tests', () => {
  expect(isTriangle(1, 2, 2)).toBe(true)
  expect(isTriangle(7, 2, 2)).toBe(false)
})
