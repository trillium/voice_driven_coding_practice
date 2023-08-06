import { test, expect } from 'vitest'
import { findNextSquare } from './findNextSquare'

test('should return the next square for perfect squares', function () {
  expect(findNextSquare(121)).toBe(144) //, "Wrong output for 121");
  expect(findNextSquare(625)).toBe(676) //, "Wrong output for 625");
  expect(findNextSquare(319225)).toBe(320356) //, "Wrong output for 319225");
  expect(findNextSquare(15241383936)).toBe(15241630849) //, "Wrong output for 15241383936");
})

test("should return -1 for numbers which aren't perfect squares", function () {
  expect(findNextSquare(155)).toBe(-1) //, "Wrong output for 155");
  expect(findNextSquare(342786627)).toBe(-1) //, "Wrong output for 342786627");
})
