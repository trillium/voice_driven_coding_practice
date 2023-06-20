export function getCount(str) {
  const vowels = str.match(/[aeiou]/gi) || ''
  return vowels.length
}
