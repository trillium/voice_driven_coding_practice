import { makeArr, makeNode } from '.'
import { test, expect } from 'vitest'

test('empty makes null', () => {
  expect(makeNode([])).toBe(null)
})

test('[1,2,3] makes a node with head at 1, tail at 3', () => {
  const node = makeNode([1, 2, 3])
  expect(node.val).toBe(1)
  expect(node.next.val).toBe(2)
  expect(node.next.next.val).toBe(3)
  expect(node.next.next.next).toBe(null)
})

test('null makes empty', () => {
  expect(makeArr(null)).toStrictEqual([])
})
