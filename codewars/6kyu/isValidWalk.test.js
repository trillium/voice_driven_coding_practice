import { test, expect } from 'vitest'
import { isValidWalk } from './isValidWalk'

test('handle some tests', () => {
  expect(isValidWalk(['w'])).toBe(false)
  expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(
    true
  )
  expect(
    isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
  ).toBe(false)
  expect(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(
    false
  )
})
