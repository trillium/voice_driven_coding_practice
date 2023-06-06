import { test, expect } from 'vitest'
import { groupAnagrams } from './groupAnagrams.js'

test('passes simple', () => {
  expect(
    groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
  ).toStrictEqual([['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']])
  expect(groupAnagrams([''])).toStrictEqual([['']])
  expect(groupAnagrams(['a'])).toStrictEqual([['a']])
})
