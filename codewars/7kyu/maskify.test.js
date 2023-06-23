import { test, expect } from 'vitest'
import { maskify } from './maskify'

test('len < 5', () => {
  expect(maskify('abcd')).toBe('abcd')
})

test('len >= 5', () => {
  expect(maskify('#abcd')).toBe('#abcd')
})
