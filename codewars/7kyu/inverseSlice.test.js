import { test, expect } from 'vitest'
import { inverseSlice } from './inverseSlice'

test('handle some tests', () => {
  expect(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4)).toStrictEqual([
    12, 14, 55, 24,
  ])
  expect(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3)).toStrictEqual([
    72, 55, 24,
  ])
  expect(
    inverseSlice(
      [
        'Intuition',
        'is',
        'a',
        'poor',
        'guide',
        'when',
        'facing',
        'probabilistic',
        'evidence',
      ],
      5,
      13
    )
  ).toStrictEqual(['Intuition', 'is', 'a', 'poor', 'guide'])
})
