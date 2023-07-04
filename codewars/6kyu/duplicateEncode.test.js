import { test, expect } from 'vitest'
import { duplicateEncode } from './duplicateEncode'

test('handle some tests', () => {
  expect(duplicateEncode('din')).toBe('(((')
  expect(duplicateEncode('recede')).toBe('()()()')
  expect(duplicateEncode('Success')).toBe(')())())')
  expect(duplicateEncode('(( @')).toBe('))((')
})
