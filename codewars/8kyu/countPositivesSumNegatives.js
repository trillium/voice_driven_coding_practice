export function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) return []
  let pos = 0
  let neg = 0
  while (input.length) {
    const v = input.pop()
    v <= 0 ? (neg += v) : pos++
  }

  return [pos, neg]
}
