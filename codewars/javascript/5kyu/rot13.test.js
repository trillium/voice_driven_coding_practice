import { test, expect } from 'vitest'
import { rot13 } from './rot13.js'

test('handles basic rotation', () => {
  expect(rot13('abcdefghijklm nopqrstuvwxyz')).toBe(
    'nopqrstuvwxyz abcdefghijklm'
  )
})

test('handles simple examples', () => {
  expect(rot13('test')).toBe('grfg')
  expect(rot13('Test')).toBe('Grfg')
})
