// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// create a stack
// when encounter an open brace
// add the corresponding closing brace to then stack with shift
// when encounter a closing brace
// it must be equal to the brace at the front of the stack
// if it is not, return false
// if the whole function finishes, return true

export function validBraces(braces) {
  const braceArr = braces.split('')
  const stack = []
  const rule = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  while (braceArr.length > 0) {
    const brace = braceArr.shift()
    if (brace in rule) {
      stack.unshift(rule[brace])
    } else {
      let close = stack.shift()
      if (brace !== close) {
        return false
      }
    }
  }

  return stack.length === 0
}
