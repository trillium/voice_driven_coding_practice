import { test, expect } from 'vitest'
import { multiples } from './multiples'

test('handle some tests', () => {
  expect(multiples(3, 5)).toStrictEqual([5, 10, 15])
  expect(multiples(2, 2)).toStrictEqual([2, 4])
})
