export function meaningfulTime (comparedDate, baseDate) {
  const now = baseDate ? new Date(baseDate) : new Date()
  const then = new Date(comparedDate)
  const values = { then: comparedDate, now: baseDate, diff: undefined }
  const retVal = { key: '', values }
  var diff

  if (now < then) {
    values.diff = -1
    retVal.key = 'time.future'
    return retVal
  }

  diff = now.getFullYear() - then.getFullYear()
  if (diff > 0) {
    values.diff = diff
    retVal.key = diff === 1 ? 'time.lastYear' : 'time.yearsAgo'
    return retVal
  }

  diff = now.getMonth() - then.getMonth()
  if (diff > 0) {
    values.diff = diff
    retVal.key = diff === 1 ? 'time.lastMonth' : 'time.monthsAgo'
    return retVal
  }

  diff = now.getDate() - then.getDate()
  if (diff > 0) {
    values.diff = diff
    retVal.key = diff === 1 ? 'time.yesterday' : 'time.daysAgo'
    return retVal
  }

  values.diff = 0
  retVal.key = 'time.today'
  return retVal
}

export function retrieveByLanguage (contentByLanguages, selectedLang, fallbackLang) {
  if (contentByLanguages === null) {
    return null
  }
  // not multilingua
  if (typeof contentByLanguages === 'string') {
    return contentByLanguages
  }
  // hit selected language
  if (contentByLanguages[selectedLang]) {
    return contentByLanguages[selectedLang]
  }
  // hit fall back language
  if (contentByLanguages[fallbackLang]) {
    return contentByLanguages[fallbackLang]
  }
  // return the language that comes the first
  return contentByLanguages[Object.keys(contentByLanguages)[0]]
}
