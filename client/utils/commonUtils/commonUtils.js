/**
 *  @name throttle
 *  @param  {Function} func
 *  @param  {Number} delay
 *  @return {Function}
 */
export const throttle = (func, delay = 100) => {
  let resizeTimeout
    // ignore resize events as long as an actualResizeHandler execution is in the queue
  return function (...props) {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null
        func(...props)

        // The actualResizeHandler will execute at a rate of 15fps
      }, delay)
    }
  }
}
