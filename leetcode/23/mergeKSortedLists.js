import ListNode from '../../utils/SinglyLinkedList'
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const nullSort = (a, b) => {
  if (!a || a.val === null) return 1
  if (!b || b.val === null) return -1
  return a.val - b.val
}

export function mergeKSortedLists(lists) {
  // handle empty
  for (let i = lists.length - 1; i >= 0; i--) {
    const node = lists[i]
    if (node === undefined || node === null) {
      lists.splice(i, 1)
    }
  }

  // exit if empty
  if (lists.length === 0) return null

  // start consuming the lists in order
  const head = new ListNode(0)
  let curr = head
  lists.sort(nullSort)

  while (lists[0] !== null) {
    curr.next = lists[0]
    lists[0] = lists[0].next
    curr = curr.next
    lists.sort(nullSort)
  }

  return head.next
}
