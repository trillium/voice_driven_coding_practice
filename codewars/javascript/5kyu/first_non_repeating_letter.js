// DESCRIPTION:
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("");
// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

class ListNode {
  constructor(index, prev = null, next = null) {
    this.index = index
    this.prev = prev
    this.next = next
    this.char = ''
  }
}

export function firstNonRepeatingLetter(s) {
  // Handle empty string
  if (s.length === 0) {
    return ''
  }

  const lower = s.toLowerCase()
  let i = 0
  const tracker = {}

  const head = new ListNode(-1)
  let prev = head

  while (i < s.length) {
    const curr = new ListNode(i, prev)
    prev.next = curr
    let char = lower[i]
    curr.char = char

    // assign value or "not found"
    const isDuplicate = tracker[char] || 'not found'

    // if 0 then skip this character
    if (isDuplicate === 'duplicate') {
      i++
      continue

      // if the duplicate is not found
    } else if (isDuplicate === 'not found') {
      // assign char in tracker for current node
      tracker[char] = curr
      // assign prev to current
      prev = curr
      i++
      continue
    } else if (isDuplicate instanceof ListNode) {
      // otherwise attach next and prev to each other
      const deleteNode = tracker[char]
      if (
        curr.char === deleteNode.char &&
        deleteNode.next.index === curr.index
      ) {
        prev = deleteNode.prev
        prev.next = null
      } else {
        const prevNode = deleteNode.prev
        const nextNode = deleteNode.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
        deleteNode.next = nextNode
      }
      tracker[char] = 'duplicate'
      i++
      continue
    }
  }

  // return the character
  // handle all repeat characters condition
  if (head.next === null) {
    return ''
  }
  return tracker[s[head.next.index]] === 'duplicate' ? '' : s[head.next.index]
}
