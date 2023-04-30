import { test, expect } from 'vitest'
import { isVeryEvenNumber } from './isVeryEvenNumber.js'

test('Testing for n = 0', () => {
  let actual = isVeryEvenNumber(0)
  expect(actual).toBe(true)
})

test('Testing for n = 4', () => {
  let actual = isVeryEvenNumber(4)
  expect(actual).toBe(true)
})

test('Testing for n = 12', () => {
  let actual = isVeryEvenNumber(12)
  expect(actual).toBe(false)
})

test('Testing for n = 222', () => {
  let actual = isVeryEvenNumber(222)
  expect(actual).toBe(true)
})

test('Testing for n = 5', () => {
  let actual = isVeryEvenNumber(5)
  expect(actual).toBe(false)
})

test('Testing for n = 45', () => {
  let actual = isVeryEvenNumber(45)
  expect(actual).toBe(false)
})

test('Testing for n = 4554', () => {
  let actual = isVeryEvenNumber(4554)
  expect(actual).toBe(false)
})

test('Testing for n = 1234', () => {
  let actual = isVeryEvenNumber(1234)
  expect(actual).toBe(false)
})

test('Testing for n = 88', () => {
  let actual = isVeryEvenNumber(88)
  expect(actual).toBe(false)
})

test('Testing for n = 24', () => {
  let actual = isVeryEvenNumber(24)
  expect(actual).toBe(true)
})

test('Testing for n = 400000220', () => {
  let actual = isVeryEvenNumber(400000220)
  expect(actual).toBe(true)
})
