/**
 *  @name bemClassNames
 */
import bemClassNames from './bemClassNames'

describe('utils/ClassNames', () => {
  let classNames

  beforeEach(() => {
    classNames = bemClassNames('baseclass')
  })

  it('should return an empty string', () => {
    classNames = bemClassNames('')
    expect(classNames()).toEqual('')
  })

  it('should return a string equal to "baseclass"', () => {
    expect(classNames('baseclass')).toEqual('baseclass')
  })

  it('should return a string equal to "baseclass extraclassname"', () => {
    expect(classNames('baseclass', 'extraclassname')).toEqual('baseclass extraclassname')
  })

  it('should return a string equal to "baseclass extraclassname extraextraclassname"', () => {
    expect(classNames('baseclass', ['extraclassname', 'extraextraclassname'])).toEqual('baseclass extraclassname extraextraclassname')
  })

  it('should return a string equal to "baseclass extraclassname"', () => {
    expect(classNames('baseclass', {extraclassname: true, extraextraclassname: false})).toEqual('baseclass extraclassname')
  })

  it('should return a string equal to "baseclass extraclassname baseclass--green"', () => {
    expect(classNames('baseclass', 'extraclassname', 'green')).toEqual('baseclass extraclassname baseclass--green')
  })

  it('should return a string equal to "baseclass baseclass--green"', () => {
    expect(classNames('baseclass', '', 'green')).toEqual('baseclass baseclass--green')
  })

  it('should return a string equal to "baseclass"', () => {
    expect(classNames('baseclass', ['green', 'yellow'])).toEqual('baseclass green yellow')
  })

  it('should return a string equal to "baseclass baseclass--green baseclass--yellow"', () => {
    expect(classNames('baseclass', '', ['green', 'yellow'])).toEqual('baseclass baseclass--green baseclass--yellow')
  })

  it('should return a string equal to "baseclass extraclassname baseclass--green baseclass--yellow"', () => {
    expect(classNames('baseclass', 'extraclassname', ['green', 'yellow'])).toEqual('baseclass extraclassname baseclass--green baseclass--yellow')
  })

  it('should return a string equal to "baseclass baseclass--green baseclass--yellow baseclass--extrayellow"', () => {
    expect(classNames('baseclass', '', ['green', 'yellow'], ['extrayellow'])).toEqual('baseclass baseclass--green baseclass--yellow baseclass--extrayellow')
  })

  it('should return a string equal to "baseclass baseclass--green baseclass--yellow baseclass--extrayellow baseclass--extraextrayellow"', () => {
    expect(classNames('baseclass', '', ['green', 'yellow'], ['extrayellow'], ['extraextrayellow'])).toEqual('baseclass baseclass--green baseclass--yellow baseclass--extrayellow baseclass--extraextrayellow')
  })

  it('should return a string equal to "baseclass extraclassname baseclass--green"', () => {
    expect(classNames('baseclass', 'extraclassname', {
      'green': true,
      'yellow': false
    })).toEqual('baseclass extraclassname baseclass--green')
  })

  it('should return a string equal to "baseclass extraclassname baseclass--green baseclass--yellow"', () => {
    expect(classNames('baseclass', 'extraclassname', {
      'green': true,
      'yellow': false
    }, [
      'yellow'
    ])).toEqual('baseclass extraclassname baseclass--green baseclass--yellow')
  })
})
