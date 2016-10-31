export function meaningfulTime (isoDate) {
  const now = new Date()
  const then = new Date(isoDate)
  var between

  between = now - then
  if (between < 0) {
    return { key: 'future', values: { iso: isoDate } }
  }

  between = now.getFullYear() - then.getFullYear()
  if (between > 1) {
    return { key: 'yearsAgo', values: { iso: isoDate, diff: between } }
  }
  if (between === 1) {
    return { key: 'lastYear', values: { iso: isoDate } }
  }

  between = now.getMonth() - then.getMonth()
  if (between > 1) {
    return { key: 'monthsAgo', values: { iso: isoDate, diff: between } }
  }
  if (between === 1) {
    return { key: 'lastMonth', values: { iso: isoDate } }
  }

  between = now.getDate() - then.getDate()
  if (between > 1) {
    return { key: 'daysAgo', values: { iso: isoDate, diff: between } }
  }
  if (between === 1) {
    return { key: 'yesterday', values: { iso: isoDate } }
  }
  if (between === 0) {
    return { key: 'today', values: { iso: isoDate } }
  }
}
