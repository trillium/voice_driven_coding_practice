import { test, expect } from 'vitest'
import { uniqueInOrder } from './uniqueInOrder'

test('handle some tests', () => {
  expect(uniqueInOrder('a')).toStrictEqual(['a'])
  expect(uniqueInOrder('ab')).toStrictEqual(['a', 'b'])
  expect(uniqueInOrder('aab')).toStrictEqual(['a', 'b'])
  expect(uniqueInOrder('aba')).toStrictEqual(['a', 'b', 'a'])
  expect(uniqueInOrder('AAAABBBCCDAABBB')).toStrictEqual([
    'A',
    'B',
    'C',
    'D',
    'A',
    'B',
  ])
})
