import { test, expect } from 'vitest'
import { validatePIN } from './validatePIN'

test('should return False for pins with length other than 4 or 6', function () {
  expect(validatePIN('1')).toBe(false) //, "Wrong output for '1'")
  expect(validatePIN('12')).toBe(false) //, "Wrong output for '12'")
  expect(validatePIN('123')).toBe(false) //, "Wrong output for '123'")
  expect(validatePIN('12345')).toBe(false) //, "Wrong output for '12345'")
  expect(validatePIN('1234567')).toBe(false) //, "Wrong output for '1234567'")
  expect(validatePIN('-1234')).toBe(false) //, "Wrong output for '-1234'")
  expect(validatePIN('1.234')).toBe(false) //, "Wrong output for '1.234'")
  expect(validatePIN('-1.234')).toBe(false) //, "Wrong output for '-1.234'")
  expect(validatePIN('00000000')).toBe(false) //, "Wrong output for '00000000'")
})

test('should return False for pins which contain characters other than digits', function () {
  expect(validatePIN('a234')).toBe(false) //, "Wrong output for 'a234'")
  expect(validatePIN('.234')).toBe(false) //, "Wrong output for '.234'")
})

test('should return True for valid pins', function () {
  expect(validatePIN('1234')).toBe(true) //, "Wrong output for '1234'");
  expect(validatePIN('0000')).toBe(true) //, "Wrong output for '0000'");
  expect(validatePIN('1111')).toBe(true) //, "Wrong output for '1111'");
  expect(validatePIN('123456')).toBe(true) //, "Wrong output for '123456'");
  expect(validatePIN('098765')).toBe(true) //, "Wrong output for '098765'");
  expect(validatePIN('000000')).toBe(true) //, "Wrong output for '000000'");
  expect(validatePIN('123456')).toBe(true) //, "Wrong output for '123456'");
  expect(validatePIN('090909')).toBe(true) //, "Wrong output for '090909'");
})
