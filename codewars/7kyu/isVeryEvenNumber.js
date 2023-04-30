// Write a function that returns true if the number is a "Very Even" number.
// If a number is a single digit, then it is simply "Very Even" if it itself is even.
// If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".

export function isVeryEvenNumber(n) {
  let n_string = n.toString()
  while (n_string.length !== 1) {
    n_string = n_string
      .split('') // split the string into an array
      .map((v) => parseInt(v)) // convert each element to an integer
      .reduce((a, b) => a + b, 0) // sum the elements, starting from 0
    n_string = n_string.toString()
  }
  return n_string % 2 === 0 ? true : false
}
