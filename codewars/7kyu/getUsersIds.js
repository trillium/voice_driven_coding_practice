export function getUsersIds(str) {
  return str
    .replace(/#/g, '')
    .split(', ')
    .map((val) => val.trim().replace(/^uid/gi, '').toLowerCase())
}
