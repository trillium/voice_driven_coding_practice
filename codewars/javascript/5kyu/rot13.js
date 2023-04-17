export function rot13(message){
  const converter = {}
  const front = "abcdefghijklm"
  const back = "nopqrstuvwxyz"

  for (let i = 0; i < front.length; i++) {
    converter[front[i]] = back[i]
    converter[front[i].toUpperCase()] = back[i].toUpperCase()
    converter[back[i]] = front[i]
    converter[back[i].toUpperCase()] = front[i].toUpperCase()
  }

  let out = ""
  for (let i = 0; i < message.length; i++) {
    out += converter[message[i]] || message[i]
  }
  return out
}