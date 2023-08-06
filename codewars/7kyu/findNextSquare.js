export function findNextSquare(sq) {
  // take square root
  let root = Math.sqrt(sq)

  // check if root is an integer
  if (!Number.isInteger(root)) {
    return -1
  }

  // add one
  root += 1

  // return square of that
  return Math.pow(root, 2)
}
