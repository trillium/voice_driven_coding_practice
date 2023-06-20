import { test, expect } from 'vitest'
import { getCount } from './getCount'

test('simple', () => {
  expect(getCount('aaa')).toBe(3)
})

test('no vowels', () => {
  expect(getCount('my py')).toBe(0)
})
