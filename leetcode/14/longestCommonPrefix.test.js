import { test, expect } from 'vitest'
import { longestCommonPrefix } from './longestCommonPrefix'

test('handle some tests', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
  expect(longestCommonPrefix(['aa', 'aa', 'aa'])).toBe('aa')
})
