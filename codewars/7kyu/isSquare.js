// Write a function that returns true if the number is a "Very Even" number.
// If a number is a single digit, then it is simply "Very Even" if it itself is even.
// If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".

export function isSquare(n) {
  if (n < 0) return false
  const sqrt = Math.sqrt(n)
  return sqrt == Math.floor(sqrt)
}
