import { test, expect } from 'vitest'
import { spinWords } from './spinWords'

test('len < 5', () => {
  expect(spinWords('abc')).toBe('abc')
})

test('len >= 5', () => {
  expect(spinWords('spine')).toBe('enips')
})
