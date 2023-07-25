export function towerBuilder(num) {
  const out = []
  for (let i = 1; i <= num; i++) {
    let row = ' '.repeat(num - i) + '*'.repeat(i * 2 - 1) + ' '.repeat(num - i)
    out.push(row)
  }

  return out
}
