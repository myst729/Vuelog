import 'userdata/database'
import { meaningfulTime, retrieveByLanguage } from 'src/helpers'

describe('Helpers', () => {
  it('Meaningful time: 3 years ago', () => {
    const comparedDate = '2012-11-19'
    const baseDate = '2015-07-03'
    const result = meaningfulTime(comparedDate, baseDate)
    expect(result).to.deep.equal({ key: 'time.yearsAgo', values: { then: '2012-11-19', now: '2015-07-03', diff: 3 } })
  })

  it('Meaningful time: last year', () => {
    const comparedDate = '2014-04-01'
    const baseDate = '2015-07-03'
    const result = meaningfulTime(comparedDate, baseDate)
    expect(result).to.deep.equal({ key: 'time.lastYear', values: { then: '2014-04-01', now: '2015-07-03', diff: 1 } })
  })

  it('Meaningful time: 5 months ago', () => {
    const comparedDate = '2015-02-14'
    const baseDate = '2015-07-03'
    const result = meaningfulTime(comparedDate, baseDate)
    expect(result).to.deep.equal({ key: 'time.monthsAgo', values: { then: '2015-02-14', now: '2015-07-03', diff: 5 } })
  })

  it('Meaningful time: last month', () => {
    const comparedDate = '2015-06-06'
    const baseDate = '2015-07-03'
    const result = meaningfulTime(comparedDate, baseDate)
    expect(result).to.deep.equal({ key: 'time.lastMonth', values: { then: '2015-06-06', now: '2015-07-03', diff: 1 } })
  })

  it('Meaningful time: 2 days ago', () => {
    const comparedDate = '2015-07-01'
    const baseDate = '2015-07-03'
    const result = meaningfulTime(comparedDate, baseDate)
    expect(result).to.deep.equal({ key: 'time.daysAgo', values: { then: '2015-07-01', now: '2015-07-03', diff: 2 } })
  })

  it('Meaningful time: yesterday', () => {
    const comparedDate = '2015-07-02'
    const baseDate = '2015-07-03'
    const result = meaningfulTime(comparedDate, baseDate)
    expect(result).to.deep.equal({ key: 'time.yesterday', values: { then: '2015-07-02', now: '2015-07-03', diff: 1 } })
  })

  it('Meaningful time: today', () => {
    const comparedDate = '2015-07-03'
    const baseDate = '2015-07-03'
    const result = meaningfulTime(comparedDate, baseDate)
    expect(result).to.deep.equal({ key: 'time.today', values: { then: '2015-07-03', now: '2015-07-03', diff: 0 } })
  })

  it('Meaningful time: future', () => {
    const comparedDate = '2999-01-01'
    const result = meaningfulTime(comparedDate)
    expect(result).to.deep.equal({ key: 'time.future', values: { then: '2999-01-01', now: undefined, diff: -1 } })
  })

  it('Retrieve null content', () => {
    const content = null
    const result = retrieveByLanguage(content, 'en-US', 'zh-CN')
    expect(result).to.equal(null)
  })

  it('Retrieve non-multilingua content', () => {
    const content = 'This text is not multilingua.'
    const result = retrieveByLanguage(content, 'en-US', 'zh-CN')
    expect(result).to.equal('This text is not multilingua.')
  })

  it('Retrieve English content', () => {
    const content = {'en-US': 'This text is in English.'}
    const result = retrieveByLanguage(content, 'en-US', 'zh-CN')
    expect(result).to.equal('This text is in English.')
  })

  it('Retrieve English content and fallback to Chinese', () => {
    const content = {'zh-CN': '这段文字是汉语。'}
    const result = retrieveByLanguage(content, 'en-US', 'zh-CN')
    expect(result).to.equal('这段文字是汉语。')
  })

  it('Retrieve English content, then Chinese, but still no luck', () => {
    const content = {'fr-FR': 'Ce texte est le français.'}
    const result = retrieveByLanguage(content, 'en-US', 'zh-CN')
    expect(result).to.equal('Ce texte est le français.')
  })
})
