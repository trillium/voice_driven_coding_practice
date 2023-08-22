export function isHappy(n) {
  const seen = {}
  let num = n
  let i = 0
  while (1) {
    let next = num
      .toString()
      .split('')
      .sort()
      .filter((n) => n !== '0')
    const signature = next.join('')
    if (signature === '1') return true
    if (signature in seen) return false
    seen[next.join('')] = true
    num = next.map((v) => Number(v) ** 2).reduce((acc, cur) => acc + cur)
  }
}
