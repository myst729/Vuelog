export function meaningfulTime (isoDate) {
  const now = new Date()
  const then = new Date(isoDate)
  var between

  between = now - then
  if (between < 0) {
    return `Somewhere in time ( ${isoDate} )`
  }

  between = now.getFullYear() - then.getFullYear()
  if (between > 1) {
    return `${between} years ago ( ${isoDate} )`
  }
  if (between === 1) {
    return `Last year ( ${isoDate} )`
  }

  between = now.getMonth() - then.getMonth()
  if (between > 1) {
    return `${between} months ago ( ${isoDate} )`
  }
  if (between === 1) {
    return `Last month ( ${isoDate} )`
  }

  between = now.getDate() - then.getDate()
  if (between > 1) {
    return `${between} days ago ( ${isoDate} )`
  }
  if (between === 1) {
    return `Yesterday ( ${isoDate} )`
  }
  if (between === 0) {
    return `Today ( ${isoDate} )`
  }
}
