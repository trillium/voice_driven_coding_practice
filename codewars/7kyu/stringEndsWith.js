export function stringEndsWith(str, ending) {
  if (ending.length === 0) return true
  return str.slice(0 - ending.length) === ending
}
