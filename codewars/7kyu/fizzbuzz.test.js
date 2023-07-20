import { test, expect } from 'vitest'
import { fizzbuzz } from './fizzbuzz'

test('handle some tests', () => {
  expect(fizzbuzz(1)).toStrictEqual([1])
  expect(fizzbuzz(10)).toStrictEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
  ])
})
