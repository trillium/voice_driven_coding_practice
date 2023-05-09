import { test, expect } from 'vitest'
import { findMissingLetter } from './findMissingLetter.js'

test('exampleTests', function () {
  expect(findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toBe('e')
  expect(findMissingLetter(['O', 'Q', 'R', 'S'])).toBe('P')
})
