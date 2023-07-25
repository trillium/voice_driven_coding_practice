import { test, expect } from 'vitest'
import { towerBuilder } from './towerBuilder'

test('handle some tests', () => {
  expect(towerBuilder(1)).toStrictEqual(['*'])
  expect(towerBuilder(2)).toStrictEqual([' * ', '***'])
  expect(towerBuilder(3)).toStrictEqual(['  *  ', ' *** ', '*****'])
})
