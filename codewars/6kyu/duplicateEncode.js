// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

export function duplicateEncode(word) {
  const chars = word
    .toLowerCase()
    .split('')
    .reduce((acc, cur) => {
      acc[cur] = acc[cur] ? ')' : '('
      return acc
    }, {})
  return word
    .toLowerCase()
    .split('')
    .map((c) => chars[c])
    .join('')
}
