export function spinWords(string) {
  return string
    .split(' ')
    .map((str) => (str.length >= 5 ? str.split('').reverse().join('') : str))
    .join(' ')
}
