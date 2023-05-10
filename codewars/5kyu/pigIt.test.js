import { test, expect } from 'vitest'
import { pigIt } from './pigIt.js'

test('should work for some examples', () => {
  expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay')
  expect(pigIt('This is my string')).toBe('hisTay siay ymay tringsay')
  expect(pigIt('Good well-being!')).toBe('oodGay ellway-eingbay!')
  expect(pigIt('Hello world !')).toBe('elloHay orldway !')
})
