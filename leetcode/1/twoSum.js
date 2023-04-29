export function twoSome(arr, target) {
  const hashMap = {}
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i]
    if (diff in hashMap) {
      return [hashMap[diff], i]
    }
    hashMap[arr[i]] = i
  }
}

// 2020-11-25
export function twoSum2nd(nums, target) {
  // initialize working variables
  // These variables will be a rolling window of the indicies
  // num1
  // num2
  let num1 = 0
  let num2 = 1
  // enter outer while loop
  // condition is num1 less than nums length
  while (num1 < nums.length) {
    // enter inner while loop
    // condition is nums2 less than nums length
    while (num2 < nums.length) {
      // test if nums[num1] + nums[num2] equal target
      if (nums[num1] + nums[num2] === target) {
        // if yes, return [num1, num2]
        return [num1, num2]
      } else {
        num2 = num2 + 1
      }
      // ** If nums list was sorted the alogrith could reject candidates
      // if test fails, retry while loop
    }
    num1 = num1 + 1
    // set nums2 to num1 + 1
    num2 = num1 + 1
    // if inner loop exits, increment outer loop
  }
  // return error if fully exit outer while loop
}
