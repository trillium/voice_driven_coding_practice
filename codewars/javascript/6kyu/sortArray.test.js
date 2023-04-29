import { test, expect } from 'vitest'
import { sortArray } from './sortArray.js'

test('should pass baisc tests', () => {
  expect(sortArray([3, 1])).toStrictEqual([1, 3])
})

test('should pass some sample tests', () => {
  expect(sortArray([5, 3, 2, 8, 1, 4])).toStrictEqual([1, 3, 2, 8, 5, 4])
  expect(sortArray([5, 3, 1, 8, 0])).toStrictEqual([1, 3, 5, 8, 0])
  expect(sortArray([])).toStrictEqual([])
  expect(sortArray([1, 11, 2, 8, 3, 4, 5])).toStrictEqual([
    1, 3, 2, 8, 5, 4, 11,
  ])
})

test('should pass additional tests', () => {
  expect(sortArray([1, 11, 2, 8, 3, 4, 5])).toStrictEqual([
    1, 3, 2, 8, 5, 4, 11,
  ])
})
