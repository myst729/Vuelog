export function meaningfulTime (isoDate) {
  const now = new Date()
  const then = new Date(isoDate)
  var between

  between = now - then
  if (between < 0) {
    return 'Somewhere in time'
  }

  between = now.getFullYear() - then.getFullYear()
  if (between > 1) {
    return between + ' years ago'
  }
  if (between === 1) {
    return 'Last year'
  }

  between = now.getMonth() - then.getMonth()
  if (between > 1) {
    return between + ' months ago'
  }
  if (between === 1) {
    return 'Last month'
  }

  between = now.getDate() - then.getDate()
  if (between > 1) {
    return between + ' days ago'
  }
  if (between === 1) {
    return 'Yesterday'
  }
  if (between === 0) {
    return 'Today'
  }
}
