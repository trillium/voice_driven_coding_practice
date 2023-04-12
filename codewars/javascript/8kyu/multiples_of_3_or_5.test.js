import { test, expect } from 'vitest'
import { multiples_of_3_or_5 } from './multiples_of_3_or_5.js'

test("basic tests", function(){
  expect(multiples_of_3_or_5(10)).toBe(23)
  expect(multiples_of_3_or_5(0)).toBe(0)
  expect(multiples_of_3_or_5(3)).toBe(0)
  expect(multiples_of_3_or_5(4)).toBe(3)
})