export function dnaStrand(str) {
  const translate = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  }
  return str
    .split('')
    .map((c) => translate[c])
    .join('')
}
