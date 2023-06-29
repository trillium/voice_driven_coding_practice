export function nbYear(p0, percent, aug, p) {
  // your code
  // 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
  let pop = p0
  let i = 0
  while (pop < p) {
    pop += Math.floor((pop * percent) / 100) + aug
    i++
  }
  return i
}
