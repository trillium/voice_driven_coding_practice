export function longestCommonPrefix(strs) {
  return strs.reduce((acc, cur) => {
    let out = ''
    let i = 0
    while (acc[i] === cur[i] && i < acc.length && i < cur.length) {
      out += acc[i]
      i++
    }
    return out
  })
}
