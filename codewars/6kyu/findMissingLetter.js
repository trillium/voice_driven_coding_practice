export function findMissingLetter(array) {
  let char = array[0].charCodeAt(0)
  let i = 1
  while (array.length) {
    let next = array[i].charCodeAt(0)

    if (char + 2 === next) {
      return String.fromCharCode(char + 1)
    }
    char = next
    i++
  }
  return ' '
}
