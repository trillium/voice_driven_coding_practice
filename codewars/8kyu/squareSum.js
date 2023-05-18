export function squareSum(arr) {
  return arr.reduce((acc, cur) => acc + cur ** 2, 0)
}
