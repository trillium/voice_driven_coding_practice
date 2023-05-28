export function likes(arr) {
  if (arr.length === 0) {
    return 'no one likes this'
  }

  if (arr.length === 1) {
    return `${arr.shift()} likes this`
  }

  if (arr.length === 2) {
    return `${arr.shift()} and ${arr.shift()} like this`
  }

  if (arr.length === 3) {
    return `${arr.shift()}, ${arr.shift()} and ${arr.shift()} like this`
  }

  if (arr.length > 3) {
    return `${arr.shift()}, ${arr.shift()} and ${arr.length} others like this`
  }

  return
}
