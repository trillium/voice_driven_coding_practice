export function persistence(num) {
  let i = 0
  let n = num
  while (n >= 10) {
    i++
    n = n
      .toString()
      .split('')
      .reduce((acc, curr) => acc * Number(curr), 1)
  }
  return i
}
