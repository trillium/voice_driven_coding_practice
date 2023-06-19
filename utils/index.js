import ListNode from './SinglyLinkedList'

export function makeNode(arr) {
  if (arr.length === 0) return null
  const head = new ListNode(arr.shift())
  let curr = head
  while (arr.length !== 0) {
    curr.next = new ListNode(arr.shift())
    curr = curr.next
  }
  return head
}

export function makeArr(head) {
  const output = []
  let curr = head
  while (curr) {
    output.push(curr.val)
    curr = curr.next
  }
  return output
}

export default { makeArr, makeNode }
