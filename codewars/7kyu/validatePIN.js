export function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    const regex = /^\d+$/;
    return regex.test(pin)
  }
  return false
}
export function validatePIN_simpler(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
