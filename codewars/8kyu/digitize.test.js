import { test, expect } from 'vitest'
import { digitize } from './digitize'

test('handle some tests', () => {
  expect(digitize(35231)).toStrictEqual([1, 3, 2, 5, 3])
  expect(digitize(0)).toStrictEqual([0])
})
