/**
 *  @module constructClassNames
 */
import constructClassNames from 'classnames'

/**
 * @module warn
 */
import { log } from 'client/utils/log'

/**
 *  appendBaseName
 *  @param  {String} baseName
 *  @param  {String} mod
 *  @return {String}
 */
const appendBaseName = (baseName, mod) => `${baseName}--${mod}`

/**
 *  modifiersToClasses
 *  @param  {String} baseClass
 *  @param  {Array} modifiers [Object, Array, String]
 *  @return {Array}
 */
const modifiersToClasses = (baseName, modifiers) => {
  log('TODO: FIX CLASSNAMES!')

  if (!baseName) {
    return ''
  }

  // Check if a baseName exists and modifiers has a length of more then 1.
  if (!modifiers.length) {
    return baseName
  }

  // Set the default class in an array.
  let classes = [ baseName ]

  return modifiers.map((mod) => {
    if (mod instanceof Array && mod.length) {
      // Loop around all names and append the base name.
      return mod.map(name => appendBaseName(baseName, name))
    } else if (typeof mod === 'string' && mod) {
      // Append the basename to the mod.
      return appendBaseName(baseName, mod)
    } else if (mod instanceof Object) {
      // Construct an array to hold the names of the object in which there value is true.
      let modArray = []

      for (let name in mod) {
        if (mod.hasOwnProperty(name) && mod[name]) {
          modArray.push(appendBaseName(baseName, name))
        }
      }

      return modArray
    }
  })
}

/**
 *  @name  classNames
 *  @param  {String} cName [String]
 *  @param  {String | Array | Object} extraClassNames [String]
 *  @param  {String | Array | Object} modifiers [Array]
 *  @return {String}
 */
const classNames = (baseName = '', extraNames = '', ...modifiers) => {
  // Construct modifications to classes from passed in arguments.
  const classesMods = modifiersToClasses(baseName, modifiers)
  return constructClassNames(baseName, extraNames, ...classesMods)
}

/**
 *  @module classNames
 */
export default classNames
