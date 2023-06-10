import { test, expect } from 'vitest'
import { mergeTwoLists } from './mergeTwoLists.js'
import { makeNode, makeArr } from '../../utils/'
import ListNode from '../../utils/SinglyLinkedList/index.js'

test('handle empty', () => {
  const list1 = []
  const list2 = []
  const head1 = makeNode(list1)
  const head2 = makeNode(list2)
  const answer = makeNode([])

  expect(mergeTwoLists(head1, head2)).toStrictEqual(answer)
})

test('simple tests', () => {
  expect(mergeTwoLists(makeNode([]), makeNode([2]))).toStrictEqual(
    makeNode([2])
  )
  expect(mergeTwoLists(makeNode([1]), makeNode([2]))).toStrictEqual(
    makeNode([1, 2])
  )
  expect(mergeTwoLists(makeNode([1, 3, 5]), makeNode([2, 4, 6]))).toStrictEqual(
    makeNode([1, 2, 3, 4, 5, 6])
  )
  expect(mergeTwoLists(makeNode([5]), makeNode([2, 4, 6]))).toStrictEqual(
    makeNode([2, 4, 5, 6])
  )
})
