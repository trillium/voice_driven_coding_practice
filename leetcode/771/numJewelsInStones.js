var numJewelsInStones = function (jewels, stones) {
  const jewelsObj = jewels.split('').reduce((acc, cur) => {
    acc[cur] = 0
    return acc
  }, {})
  stones
    .split('')
    .forEach((s) => (jewelsObj[s] >= 0 ? (jewelsObj[s] += 1) : null))
  return Object.values(jewelsObj).reduce((a, b) => a + b)
}
