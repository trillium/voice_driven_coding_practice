import { test, expect } from 'vitest'
import { xo } from './xo.js'

test('should work for some examples', () => {
  expect(xo('xo')).toBe(true)
  expect(xo('xxOo')).toBe(true)
  expect(xo('xxxm')).toBe(false)
  expect(xo('Oo')).toBe(false)
  expect(xo('ooom')).toBe(false)
})
