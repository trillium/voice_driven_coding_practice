export function moveZeros(arr) {
  arr.sort((a, b) => {
    if (a === 0) {
      return 1
    }
    if (b === 0) {
      return -1
    }
    return 0
  })
  return arr
}

export function moveZerosOOfN(arr) {
  let insertPos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos++] = arr[i];
    }
  }
  while (insertPos < arr.length) {
    arr[insertPos++] = 0;
  }
  return arr;
}