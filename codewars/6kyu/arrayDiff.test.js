import { test, expect } from 'vitest'
import { arrayDiff } from './arrayDiff.js'

test('should pass baisc tests', () => {
  expect(arrayDiff([1, 2], [1])).toStrictEqual([2]) // "a was [1,2], b was [1]");
  expect(arrayDiff([1, 2, 2], [1])).toStrictEqual([2, 2]) // "a was [1,2,2], b was [1]");
  expect(arrayDiff([1, 2, 2], [2])).toStrictEqual([1]) // "a was [1,2,2], b was [2]");
  expect(arrayDiff([1, 2, 2], [])).toStrictEqual([1, 2, 2]) // "a was [1,2,2], b was []");
  expect(arrayDiff([], [1, 2])).toStrictEqual([]) // "a was [], b was [1,2]");
  expect(arrayDiff([1, 2, 3], [1, 2])).toStrictEqual([3]) // "a was [1,2,3], b was [1,2]")
})
