import { test, expect } from 'vitest'
import { isIsogram } from './isIsogram'

test('handle some tests', () => {
  expect(isIsogram('aba')).toBe(false)
  expect(isIsogram('Dermatoglyphics')).toBe(true)
  expect(isIsogram('isogram')).toBe(true)
  expect(isIsogram('moOse')).toBe(false)
  expect(isIsogram('isIsogram')).toBe(false)
  expect(isIsogram('')).toBe(true)
})
