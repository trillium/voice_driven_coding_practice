import { test, expect } from 'vitest'
import { removeElements } from './removeElements'
import { makeNode, makeArr } from '../../utils'

test('[], 2 -> []', () => {
  const arr = []
  const num = null
  const head = makeNode(arr)
  console.log(head)
  const out = removeElements(head, num)
  const ans = makeArr(out)

  expect(ans).toStrictEqual([])
})

test('[1], 2 -> [1]', () => {
  const arr = [1]
  const num = 2
  const head = makeNode(arr, num)
  const out = removeElements(head)
  const ans = makeArr(out)

  expect(ans).toStrictEqual([1])
})

test('[1, 2], 2 -> [1]', () => {
  const arr = [1, 2]
  const num = 2
  const head = makeNode(arr)
  const out = removeElements(head, num)
  const ans = makeArr(out)

  expect(ans).toStrictEqual([1])
})

test('[1, 2, 6, 3, 4, 5, 6], 6 -> [1, 2, 3, 4, 5]', () => {
  const arr = [1, 2, 6, 3, 4, 5, 6]
  const num = 6
  const head = makeNode(arr)
  const out = removeElements(head, num)
  const ans = makeArr(out)

  expect(ans).toStrictEqual([1, 2, 3, 4, 5])
})
