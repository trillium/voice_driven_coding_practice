import { test, expect } from 'vitest'
import { consonantCount } from './consonantCount'

test('simple', () => {
  expect(consonantCount('aaa')).toBe(0)
})

test('no vowels', () => {
  expect(consonantCount('my py')).toBe(4)
})
