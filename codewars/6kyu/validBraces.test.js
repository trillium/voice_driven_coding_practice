import { test, expect } from 'vitest'
import { validBraces } from './validBraces'

test('handle some tests', () => {
  expect(validBraces(')')).toBe(false)
  expect(validBraces('(')).toBe(false)
  expect(validBraces('()')).toBe(true)
  expect(validBraces('[]')).toBe(true)
  expect(validBraces('{}')).toBe(true)
  expect(validBraces('()))')).toBe(false)
  expect(validBraces('(){}[]')).toBe(true)
  expect(validBraces('([{}])')).toBe(true)
  expect(validBraces('(}')).toBe(false)
  expect(validBraces('[(])')).toBe(false)
  expect(validBraces('({})[({})]')).toBe(true)
  expect(validBraces('(})')).toBe(false)
  expect(validBraces('(({{[[]]}}))')).toBe(true)
  expect(validBraces('{}({})[]')).toBe(true)
  expect(validBraces(')(}{][')).toBe(false)
  expect(validBraces('())({}}{()][][')).toBe(false)
  expect(validBraces('(((({{')).toBe(false)
  expect(validBraces('}}]]))}])')).toBe(false)
})
