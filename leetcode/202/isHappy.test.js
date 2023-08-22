import { test, expect } from 'vitest'
import { isHappy } from './isHappy'

test('handle some tests', () => {
  expect(isHappy(1)).toBe(true)
  expect(isHappy(19)).toBe(true)
  expect(isHappy(2)).toBe(false)
})
