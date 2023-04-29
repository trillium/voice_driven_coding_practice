// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

export function sortArray(array) {
  const oddSortedArray = array.filter((v) => v % 2 !== 0).sort((a, b) => a - b)

  array.forEach((v, i, arr) => {
    if (v % 2 !== 0) arr[i] = oddSortedArray.shift()
  })
  return array
}
