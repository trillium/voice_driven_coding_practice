// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

export function xo(str) {
  const lower = str.toLowerCase()
  const track = {
    x: 0,
    o: 0,
  }
  for (let i = 0; i < str.length; ++i) {
    if (lower[i] === 'x') track.x += 1
    if (lower[i] === 'o') track.o += 1
  }
  return track.x === track.o
}
