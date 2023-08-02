import { test, expect } from 'vitest'
import { persistence } from './persistence'

test('handle some tests', () => {
  expect(persistence(1)).toBe(0)
  expect(persistence(10)).toBe(1)
  expect(persistence(44)).toBe(2)
  expect(persistence(39)).toBe(3) //27 //14 //4
  expect(persistence(4)).toBe(0)
  expect(persistence(25)).toBe(2)
  expect(persistence(999)).toBe(4)
})
