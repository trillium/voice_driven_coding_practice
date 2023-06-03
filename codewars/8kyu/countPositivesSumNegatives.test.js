import { test, expect } from 'vitest'
import { countPositivesSumNegatives } from './countPositivesSumNegatives.js'

test('Testing for fixed test 1', () => {
  let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
  let actual = countPositivesSumNegatives(testData)
  let expected = [10, -65]
  expect(actual).toStrictEqual(expected)
})

test('Testing for fixed test 2', () => {
  let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
  let actual = countPositivesSumNegatives(testData)
  let expected = [8, -50]
  expect(actual).toStrictEqual(expected)
})

test('Testing for []', () => {
  let testData = []
  let actual = countPositivesSumNegatives(testData)
  let expected = []
  expect(actual).toStrictEqual(expected)
})

test('Testing for []', () => {
  let testData = null
  let actual = countPositivesSumNegatives(testData)
  let expected = []
  expect(actual).toStrictEqual(expected)
})
