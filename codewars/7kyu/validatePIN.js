export function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    const regex = /^\d+$/;
    return regex.test(pin)
  }
  return false
}
