import { test, expect } from 'vitest'
import { pillars } from './pillars'

test('Testing for number of pillars: 1, distance: 10 m and width: 10 cm', function () {
  expect(pillars(1, 10, 10)).toBe(0)
})
test('Testing for number of pillars: 2, distance: 20 m and width: 25 cm', function () {
  expect(pillars(2, 20, 25)).toBe(2000)
})
test('Testing for number of pillars: 11, distance: 15 m and width: 30 cm', function () {
  expect(pillars(11, 15, 30)).toBe(15270)
})
test('pillars: 3, distance: 1 m and width: 1 cm', function () {
  expect(pillars(3, 1, 1)).toBe(2 * 100 + 1)
})
