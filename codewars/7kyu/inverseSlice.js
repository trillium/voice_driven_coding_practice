export function inverseSlice(items, a, b) {
  const arr = []
  for (let i = 0; i < items.length; i++) {
    if (i < a || i >= b) arr.push(items[i])
  }
  return arr
}
2
