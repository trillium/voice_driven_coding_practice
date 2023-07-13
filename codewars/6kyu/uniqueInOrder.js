// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

import { it } from 'vitest'

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

export function uniqueInOrder(iterable) {
  let arr
  if (typeof iterable === 'string') {
    arr = iterable.split('')
  } else {
    arr = [...iterable]
  }

  return arr.reduce((acc, curr) => {
    if (acc.length === 0 || acc[acc.length - 1] !== curr) {
      acc.push(curr)
    }
    return acc
  }, [])
}

//other notable solution
function uniqueInOrder2(iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1])
}
