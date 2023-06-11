import { test, expect } from 'vitest'
import { mergeKSortedLists } from './mergeKSortedLists.js'
import { makeNode, makeArr } from '../../utils/index.js'
import ListNode from '../../utils/SinglyLinkedList/index.js'

// test('handle empty', () => {
//   const list1 = []
//   const list2 = []
//   const head1 = makeNode(list1)
//   const head2 = makeNode(list2)
//   const answer = makeNode([])

//   expect(mergeKSortedLists([head1, head2])).toStrictEqual(answer)
// })

// test('handle [], [2]', () => {
//   expect(mergeKSortedLists([makeNode([]), makeNode([2])])).toStrictEqual(
//     makeNode([2])
//   )
// })

test('[1], [2]', () => {
  const list1 = [1]
  const list2 = [2]
  const head1 = makeNode(list1)
  const head2 = makeNode(list2)
  const answer = makeNode([])
  const out = mergeKSortedLists([makeNode([1]), makeNode([2])])
  const unwrap = makeArr(out)

  expect(unwrap).toStrictEqual([1, 2])
})

test('[1,3,5] [2,4,6]', () => {
  expect(
    mergeKSortedLists([makeNode([1, 3, 5]), makeNode([2, 4, 6])])
  ).toStrictEqual(makeNode([1, 2, 3, 4, 5, 6]))
})

test('[5] [2,4,6]', () => {
  expect(mergeKSortedLists([makeNode([5]), makeNode([2, 4, 6])])).toStrictEqual(
    makeNode([2, 4, 5, 6])
  )
})
