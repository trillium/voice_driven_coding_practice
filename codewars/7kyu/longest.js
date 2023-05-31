export function longest(s1, s2) {
  const regex = /^[a-z]+$/
  const arr = [...s1, ...s2]

  const mySet = new Set()
  while (arr.length) {
    mySet.add(arr.pop())
  }
  return [...mySet.values()]
    .filter((char) => regex.test(char))
    .sort()
    .join('')
}
