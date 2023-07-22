import { test, expect } from 'vitest'
import { digitalRoot } from './digitalRoot'

test('handle some tests', () => {
  expect(digitalRoot(16)).toBe(7)
  expect(digitalRoot(456)).toBe(6)
})
