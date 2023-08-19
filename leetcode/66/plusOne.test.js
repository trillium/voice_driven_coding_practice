import { test, expect } from 'vitest'
import { plusOne } from './plusOne'

test('handle some tests', () => {
  expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4])
  expect(plusOne([1])).toStrictEqual([2])
  expect(plusOne([9])).toStrictEqual([1, 0])
})
