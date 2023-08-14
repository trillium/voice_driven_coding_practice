export function digitize(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map((n) => Number(n))
}
