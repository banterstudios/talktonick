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
    expect(classNames()).toEqual('baseclass')
  })

  it('should return a string equal to "baseclass extraclassname"', () => {
    expect(classNames('extraclassname')).toEqual('baseclass extraclassname')
  })

  it('should return a string equal to "baseclass extraclassname extraextraclassname"', () => {
    expect(classNames(['extraclassname', 'extraextraclassname'])).toEqual('baseclass extraclassname extraextraclassname')
  })

  it('should return a string equal to "baseclass extraclassname"', () => {
    expect(classNames({extraclassname: true, extraextraclassname: false})).toEqual('baseclass extraclassname')
  })

  it('should return a string equal to "baseclass extraclassname baseclass--green"', () => {
    expect(classNames('extraclassname', 'green')).toEqual('baseclass extraclassname baseclass--green')
  })

  it('should return a string equal to "baseclass baseclass--green"', () => {
    expect(classNames('', 'green')).toEqual('baseclass baseclass--green')
  })

  it('should return a string equal to "baseclass"', () => {
    expect(classNames(['green', 'yellow'])).toEqual('baseclass green yellow')
  })

  it('should return a string equal to "baseclass baseclass--green baseclass--yellow"', () => {
    expect(classNames('', ['green', 'yellow'])).toEqual('baseclass baseclass--green baseclass--yellow')
  })

  it('should return a string equal to "baseclass extraclassname baseclass--green baseclass--yellow"', () => {
    expect(classNames('extraclassname', ['green', 'yellow'])).toEqual('baseclass extraclassname baseclass--green baseclass--yellow')
  })

  it('should return a string equal to "baseclass baseclass--green baseclass--yellow baseclass--extrayellow"', () => {
    expect(classNames('', ['green', 'yellow'], ['extrayellow'])).toEqual('baseclass baseclass--green baseclass--yellow baseclass--extrayellow')
  })

  it('should return a string equal to "baseclass baseclass--green baseclass--yellow baseclass--extrayellow baseclass--extraextrayellow"', () => {
    expect(classNames('', ['green', 'yellow'], ['extrayellow'], ['extraextrayellow'])).toEqual('baseclass baseclass--green baseclass--yellow baseclass--extrayellow baseclass--extraextrayellow')
  })

  it('should return a string equal to "baseclass extraclassname baseclass--green"', () => {
    expect(classNames('extraclassname', {
      'green': true,
      'yellow': false
    })).toEqual('baseclass extraclassname baseclass--green')
  })

  it('should return a string equal to "baseclass extraclassname baseclass--green baseclass--yellow"', () => {
    expect(classNames('extraclassname', {
      'green': true,
      'yellow': false
    }, [
      'yellow'
    ])).toEqual('baseclass extraclassname baseclass--green baseclass--yellow')
  })
})
