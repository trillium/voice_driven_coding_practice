import { test, expect } from 'vitest'
import { mergeTwoLists, ListNode } from './mergeTwoLists.js'

function makeNode(arr) {
  if (arr.length === 0) return null
  const head = new ListNode(arr.shift())
  let curr = head
  while (arr.length !== 0) {
    curr.next = new ListNode(arr.shift())
    curr = curr.next
  }
  return head
}

function makeArr(head) {
  output = []
  let curr = head
  while (curr) {
    output.push(curr.val)
    curr = curr.next
  }
  return output
}

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
