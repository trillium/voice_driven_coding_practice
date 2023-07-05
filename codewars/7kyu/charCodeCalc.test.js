import { test, expect } from 'vitest'
import { charCodeCalc } from './charCodeCalc'

test('handle some tests', () => {
  expect(charCodeCalc('abcdef')).toBe(6)
  expect(charCodeCalc('ifkhchlhfd')).toBe(6)
  expect(charCodeCalc('aaaaaddddr')).toBe(30)
  expect(charCodeCalc('jfmgklf8hglbe')).toBe(6)
  expect(
    charCodeCalc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
  ).toBe(96)
})

// M pre second line second block file then take every instance callee then bring fifth token first line file
// M pre second line second block file then take every instance callee then bring fifth token first line file, take forth token
