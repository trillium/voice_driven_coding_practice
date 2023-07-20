export function fizzbuzz(n) {
  let word
  const out = []
  for (let i = 1; i <= n; ++i) {
    word = ''
    if (i % 3 === 0) word += 'Fizz'
    if (i % 5 === 0) word += 'Buzz'
    out.push(word || i)
  }
  return out
}
