import { test, expect } from 'vitest'
import { getMiddle } from './getMiddle'

test('simple', () => {
  expect(getMiddle('aba')).toBe('b')
})

test('4 letter', () => {
  expect(getMiddle('abba')).toBe('bb')
})
