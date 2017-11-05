export const isArray = (arr) => Array.isArray(arr)

export const isObject = (obj) => typeof obj === 'object' && (Array.isArray(obj) === false)

export const isString = (value) => typeof value === 'string'

export const isTruthy = (value) => !!value