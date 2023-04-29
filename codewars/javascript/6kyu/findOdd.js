// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

export function findOdd(A) {
  const tracker = {}
  while (A.length) {
    const num = A.pop()
    tracker[num] = tracker[num] ? tracker[num] + 1 : 1
  }
  for (const [key, value] of Object.entries(tracker)) {
    if (value % 2 === 1) {
      return parseInt(key)
    }
  }
}
