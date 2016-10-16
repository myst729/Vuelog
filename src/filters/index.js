export function meaningfulDays (isoDate) {
  const between = (Date.now() - new Date(isoDate)) / 1000
  if (between < 0) {
    return 'in the future'
  } else if (between < 86400) {
    return 'today'
  } else if (between < 172800) {
    return 'yesterday'
  } else {
    return Math.floor(between / 86400) + ' days ago'
  }
}
