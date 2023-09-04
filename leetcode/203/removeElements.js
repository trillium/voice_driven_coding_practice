import ListNode from '../../utils/SinglyLinkedList'
import { makeArr } from '../../utils'

export function removeElements(head, val) {
  const dummy = new ListNode(-1, head)
  let curr = dummy.next
  let prev = dummy

  while (curr != null) {
    if (curr.val === val) {
      prev.next = curr.next
      curr = curr.next
    } else {
      prev = curr
      curr = prev.next
    }
  }

  if (!curr && prev.next === val) {
    prev.next = null
  }

  return dummy.next
}
