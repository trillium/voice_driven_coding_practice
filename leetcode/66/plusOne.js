export function plusOne(digits) {
  let carry = true
  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry) {
      carry = false
      if (digits[i] + 1 < 10) digits[i] += 1
      else {
        carry = true
        digits[i] = 0
      }
    }
  }
  if (carry) digits.unshift(1)
  return digits
}

export function plusOneOneliner(digits) {
  return (BigInt(digits.join('')) + BigInt(1)).toString().split('')
}
