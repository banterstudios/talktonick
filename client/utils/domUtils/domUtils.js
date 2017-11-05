/**
*    @function
*    @return { DOMElement }
*    @param { string } id
*/
export const queryById = id => {
  return document.getElementById(id)
}

/**
 *  @name queryBySelector
 *  @param  {String} selector
 *  @return {DOMElement}
 */
export const queryBySelector = selector => {
  return document.querySelector(selector)
}

/**
 * @name addClass
 * @description  Adds a class to passed element
 * @param { HTMLElement } element
 * @param { String } className
 */
export const addClass = (element, className) => {
  if (element && element.classList) {
    const classNames = className.split(' ')
    for (let i = 0, len = classNames.length; i < len; i++) {
      element.classList.add(classNames[i])
    }
  }
}

/**
 *  @name toggleClass
 *  @description Toggles class to passed in element
 *  @param  {HTMLElement} element
 *  @param  {String} className
 *  @return {Void}
 */
export const toggleClass = (element, className) => {
  if (element && element.classList) {
    const classNames = className.split(' ')
    for (let i = 0, len = classNames.length; i < len; i++) {
      element.classList.toggle(classNames[i])
    }
  }
}

/**
 *  @name removeClass
 *  @description Removes class to passed in element
 *  @param  {HTMLElement} element
 *  @param  {String} className
 *  @return {Void}
 */
export const removeClass = (element, className = '') => {
  if (element && element.classList) {
    const classNames = className.split(' ')
    for (let i = 0, len = classNames.length; i < len; i++) {
      element.classList.remove(classNames[i])
    }
  }
}

export const isElemInView = (node, offset = 0) => {
  // get element position in viewport
  const rect = node.getBoundingClientRect()

  // get viewport height and width
  const viewportHeight = (window.innerHeight || document.documentElement.clientHeight)

  const viewportWidth = (window.innerWidth || document.documentElement.clientWidth)

  // check if the element is in the viewport (or near to them)
  return (
    rect.bottom >= (0 - offset) &&
    rect.right >= (0 - offset) &&
    rect.top < (viewportHeight + offset) &&
    rect.left < (viewportWidth + offset)
  )
}
