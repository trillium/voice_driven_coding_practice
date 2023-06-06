export function groupAnagrams(arr) {
  const hashmap = {}
  while (arr.length) {
    const word = arr.pop()
    const sort = word.split('').sort().join('')
    hashmap[sort] ? hashmap[sort].push(word) : (hashmap[sort] = [word])
  }
  return Object.values(hashmap).map((v) => v.sort())
}
