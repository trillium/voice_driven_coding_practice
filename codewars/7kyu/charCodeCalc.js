// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

// This is an `add up the digits problem`
// the only difference between `total1` and `total2` is 7s are replaced with 1s
// that means that total1 will 6 more than total2 for every instance 7
// filter to see how many 7s
// return that number multiplied by 6

export function charCodeCalc(str) {
  return (
    str
      .split('')
      .map((c) => c.charCodeAt().toString())
      .join('')
      .split('')
      .filter((n) => n === '7').length * 6
  )
}
