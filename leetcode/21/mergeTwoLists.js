import { ListNode } from '../../utils'

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list. The list should be made by
 * splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

export function mergeTwoLists(list1, list2) {
  if (list1 === null) return list2
  if (list2 === null) return list1
  if (list1 === null && list2 === null) return null

  let curr
  let l1 = list1
  let l2 = list2

  if (l1.val <= l2.val) {
    curr = l1
    l1 = l1.next
  } else {
    curr = l2
    l2 = l2.next
  }

  const head = curr

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      curr.next = l1
      curr = curr.next
      l1 = l1.next
      if (l1 === null) {
        curr.next = l2
        break
      }
    } else {
      curr.next = l2
      curr = curr.next
      l2 = l2.next
      if (l2 === null) {
        curr.next = l1
        break
      }
    }
  }

  if (l1 !== null) {
    curr.next = l1
    curr = curr.next
  }
  if (l2 !== null) {
    curr.next = l2
    curr = curr.next
  }

  return head
}
