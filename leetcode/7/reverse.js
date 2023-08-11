//[-231, 231 - 1]
const upper = Math.pow(2, 31) - 1
const lower = -Math.pow(2, 31)

export function reverse(x) {
  const split = x.toString().split('')
  const dashed = split[0] === '-'
  let out
  if (dashed) {
    out = split.slice(1)
    out = out.reverse()
    out.unshift('-')
  } else {
    out = split.reverse()
  }
  out = Number(out.join(''))
  if (out > upper || out < lower) return 0
  return out
}

export function reverseSimpler(x) {
  const out = Math.abs(x).toString().split('').reverse().join('')
  if (out >= 2 ** 31 - 1 || out <= -(2 ** 31)) return 0
  return x > 0 ? out : -out
}
