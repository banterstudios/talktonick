export const isArray = (arr) => Array.isArray(arr)

export const isObject = (obj) => typeof obj === 'object' && (Array.isArray(obj) === false)

export const isString = (value) => typeof value === 'string'

export const isTruthy = (value) => !!value

export const allowOnly = (obj, props) => {
  if (!isObject(obj) || !isArray(props)) {
    throw new Error('Either object or props is not correct. Please check your parameters.')
  }

  return Object.entries(obj).reduce((obj, [ key, value ]) => {
    if (props.includes(key)) {
      obj[key] = value
    }

    return obj
  }, {})
}
