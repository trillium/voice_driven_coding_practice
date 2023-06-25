import { test, expect } from 'vitest'
import { dnaStrand } from './dnaStrand'

test('Testing for fixed tests', () => {
  expect(dnaStrand('AAAA')).toBe('TTTT')
  expect(dnaStrand('ATTGC')).toBe('TAACG')
  expect(dnaStrand('GTAT')).toBe('CATA')
})
