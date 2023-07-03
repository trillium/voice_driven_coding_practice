export function squareDigits(num) {
  return Number(
    num
      .toString()
      .split('')
      .map((v) => Number(v) ** 2)
      .join('')
  )
}
