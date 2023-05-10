// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function isAlpha(char) {
  return /^[a-zA-Z]$/.test(char)
}

export function pigIt(str) {
  const words = str.split(' ')
  const chars = str.split('')
  //   console.log(words)
  let out = []
  let alpha = false
  let part = []
  for (let i = 0; i < chars.length; i++) {
    if (isAlpha(chars[i])) {
      part.push(chars[i])
      alpha = true
      //   console.log(chars[i], part)
    } else {
      part.push(part.shift())
      if (alpha) {
        part.push('ay')
        alpha = false
      }
      part.push(chars[i])
      out.push(part.join(''))
      part = []
    }
  }
  part.push(part.shift())
  if (alpha) {
    part.push('ay')
    // alpha = false
  }
  //   part.push(chars[i])
  out.push(part.join(''))
  //part = []
  //console.log(part.join(' '))
  return out.join('')
}

// export function pigIt(str) {
//   return str
//     .split(' ')
//     .map((word) => {
//       return word
//         .split('-')
//         .map((part) => {
//           if (!/[.,:!?;]/.test(part)) {
//             const letters = part.split('')
//             letters.push(letters.shift() + 'ay')
//             return letters.join('')
//           } else {
//             return part
//           }
//         })
//         .join('-')
//     })
//     .join(' ')
// }
