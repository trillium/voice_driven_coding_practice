export function containsDuplicate(arr) {
  let hashMap = {};
  while (arr.length) {
    const val = arr.pop();
    if (hashMap[val]) return true;
    hashMap[val] = 1;
  }
  return false;
}
