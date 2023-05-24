import { test, expect } from 'vitest'
import { evenOrOdd } from './evenOrOdd.js'

test('2 is even', () => {
  expect(evenOrOdd(2)).toBe('Even')
})
test('7 is odd', () => {
  expect(evenOrOdd(7)).toBe('Odd')
})
test('-42 is even', () => {
  expect(evenOrOdd(-42)).toBe('Even')
})
test('-7 is odd', () => {
  expect(evenOrOdd(-7)).toBe('Odd')
})
test('0 is even', () => {
  expect(evenOrOdd(0)).toBe('Even')
})
