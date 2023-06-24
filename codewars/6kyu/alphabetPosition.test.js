import { test, expect } from 'vitest'
import { alphabetPosition } from './alphabetPosition'

test('len < 5', () => {
  expect(alphabetPosition('a')).toBe('1')
})

test('len >= 5', () => {
  expect(alphabetPosition('ab')).toBe('1 2')
})
