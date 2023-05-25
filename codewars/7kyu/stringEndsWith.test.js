import { test, expect } from 'vitest'
import { stringEndsWith } from './stringEndsWith'

test('test', () => {
  expect(stringEndsWith('abcde', 'cde')).toBe(true)
  expect(stringEndsWith('abcde', 'abc')).toBe(false)
  expect(stringEndsWith('abcde', '')).toBe(true)
})
