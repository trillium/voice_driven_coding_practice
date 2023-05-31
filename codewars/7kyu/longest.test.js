import { test, expect } from 'vitest'
import { longest } from './longest'

test('should return correct text', function () {
  expect(longest('aretheyhere', 'yestheyarehere')).toBe('aehrsty')
  expect(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')).toBe(
    'abcdefghilnoprstu'
  )
  expect(longest('inmanylanguages', 'theresapairoffunctions')).toBe(
    'acefghilmnoprstuy'
  )
})
