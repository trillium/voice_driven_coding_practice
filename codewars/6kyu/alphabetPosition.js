export function alphabetPosition(text) {
  const regex = /[a-z]/gi
  const chars = text.toLowerCase().match(regex) || []
  const charCodeShift = 'a'.charCodeAt() - 1
  return chars.map((letter) => letter.charCodeAt() - charCodeShift).join(' ')
}
