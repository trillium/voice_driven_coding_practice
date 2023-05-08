import { test, expect } from 'vitest'
import { createPhoneNumber } from './createPhoneNumber.js'

test('should pass some sample tests', () => {
  expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
    '(123) 456-7890'
  ) // "The array was: [1,2,3,4,3,2,1] \n");
  expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(
    '(111) 111-1111'
  ) // "The array was: [1,100,50,-51,1,1] \n");
})
