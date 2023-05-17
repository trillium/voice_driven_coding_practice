export function formatDuration(seconds) {
  if (seconds === 0) return 'now'

  const minute = 60
  const hour = 60 * minute
  const day = 24 * hour
  const year = 365 * day

  const durations = {
    sedcond: 0,
    minute: 0,
    hour: 0,
    day: 0,
    year: 0,
  }

  let timeLeft = seconds
  while (timeLeft) {
    if (timeLeft >= year) {
      timeLeft -= year
      durations.year += 1
      continue
    }

    if (timeLeft >= day) {
      timeLeft -= day
      durations.day += 1
      continue
    }

    if (timeLeft >= hour) {
      timeLeft -= hour
      durations.hour += 1
      continue
    }

    if (timeLeft >= minute) {
      timeLeft -= minute
      durations.minute += 1
      continue
    }

    durations.second = timeLeft
    break
  }

  const joiner = (len) => {
    if (len >= 2) return ', '
    if (len === 1) return ' and '
    if (len === 0) return ''
  }

  const outArr = []
  const mapArr = ['year', 'day', 'hour', 'minute', 'second'].forEach((key) => {
    const window = durations[key]
    if (window === 0) return
    if (window === 1) {
      outArr.push(`1 ${key}`)
      return
    }
    if (window > 1) {
      outArr.push(`${window} ${key}s`)
      return
    }
  })

  let outStr = ''
  while (outArr.length) {
    outStr += outArr.shift() + joiner(outArr.length)
  }
  return outStr
}
