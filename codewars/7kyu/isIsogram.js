// This is not the most efficient way to solve this problem

// This function is a check to see if every char in the str is unique

// This is forcing a reduce to work for this usecase but the solve seemed interesting rather than an easier solve

export function isIsogram(str) {
  return !!str
    .toLowerCase()
    .split('')
    .reduce((acc, cur) => {
      if (acc) {
        if (cur in acc) {
          return false
        } else {
          acc[cur] = true
        }
        return acc
      } else {
        return false
      }
    }, {})
}

// Other simpler solves:
function isIsogram2(str) {
  return new Set(str.toUpperCase()).size == str.length
}

function isIsogram3(str) {
  return !/(\w).*\1/i.test(str)
}
