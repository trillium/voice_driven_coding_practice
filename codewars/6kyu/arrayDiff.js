export function arrayDiff(a, b) {
  const rejectObj = {}
  b.forEach((num) => (rejectObj[num] = true))
  for (let i = a.length - 1; i >= 0; --i) {
    if (rejectObj[a[i]]) {
      a.splice(i, 1)
    }
  }
  return a
}
