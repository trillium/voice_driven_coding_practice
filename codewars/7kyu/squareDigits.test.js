import { test, expect } from 'vitest'
import { squareDigits } from './squareDigits'

test('squareDigits(3212) should equal 9414', () => {
  expect(squareDigits(3212)).toBe(9414)
})

test('squareDigits(2112) should equal 4114', () => {
  expect(squareDigits(2112)).toBe(4114)
})

test('squareDigits(0) should equal 0', () => {
  expect(squareDigits(0)).toBe(0)
})
