import {
  isArray,
  isObject,
  isString,
  isTruthy
} from 'client/utils/objectUtils'

/**
 *  @name   constructModifierClass
 *  @param  {String} baseClass
 *  @param  {String} modClass
 *  @return {String}
 */
const constructModifierClass = (baseClass, modClass) => `${baseClass}--${modClass}`

/**
 *  @name   constructCustomClass
 *  @param  {String} customClass
 *  @return {String}
 */
const constructCustomClass = (customClass) => `${customClass}`

/**
 * @name  createClasses
 * @param {String} baseClass
 * @param {Array} modifiers
 * @param {Function} fn
 */
const createClasses = (baseClass, modifiers, fn) => {
  return modifiers.reduce((arr, modifier) => {
    if (isArray(modifier)) {
      return arr.concat(filterArr(modifier).map(fn))
    } else if (isString(modifier)) {
      arr.push(fn(baseClass, modifier))
      return arr
    } else if (isObject(modifier)) {
      const entries = Object.entries(modifier).reduce((arr, [ name ]) => {
        name && arr.push(fn(baseClass, name))
        return arr
      }, [])
      return arr.concat(entries)
    }
  }, [])
}

/**
 * @name  filterArr
 * @param {Array} arr
 * @returns {Array}
 */
const filterArr = (arr) => arr.filter(isTruthy)

/**
 * @name  joinArr
 * @param {Array} arr
 * @returns {String}
 */
const joinArr = (arr) => arr.join(' ')

/**
 * @name bemClassNames
 * @param {String} baseClass
 * @param {Array} args
 * @returns String
 */
const bemClassNames = (baseClass = '') => (customClasses, ...modifiers) => {
  if (!isString(baseClass)) {
    return ''
  }

  if (!isTruthy(modifiers.length)) {
    return baseClass
  }

  return joinArr([
    baseClass,
    ...createClasses('', [customClasses], constructCustomClass),
    ...createClasses(baseClass, modifiers, constructModifierClass)
  ])
}

export default bemClassNames
