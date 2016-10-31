export function meaningfulTime (isoDate) {
  const now = new Date()
  const then = new Date(isoDate)
  var between

  between = now - then
  if (between < 0) {
    return { key: 'time.future', values: { iso: isoDate } }
  }

  between = now.getFullYear() - then.getFullYear()
  if (between > 1) {
    return { key: 'time.yearsAgo', values: { iso: isoDate, diff: between } }
  }
  if (between === 1) {
    return { key: 'time.lastYear', values: { iso: isoDate } }
  }

  between = now.getMonth() - then.getMonth()
  if (between > 1) {
    return { key: 'time.monthsAgo', values: { iso: isoDate, diff: between } }
  }
  if (between === 1) {
    return { key: 'time.lastMonth', values: { iso: isoDate } }
  }

  between = now.getDate() - then.getDate()
  if (between > 1) {
    return { key: 'time.daysAgo', values: { iso: isoDate, diff: between } }
  }
  if (between === 1) {
    return { key: 'time.yesterday', values: { iso: isoDate } }
  }
  if (between === 0) {
    return { key: 'time.today', values: { iso: isoDate } }
  }
}
