// Native chainability fix
(p => {
  const patch = (orig) => function () {
    const p = orig.apply(this, arguments)
    if (this.hasOwnProperty('cancel')) {
      p.cancel = this.cancel
    }
    return p
  }
  p.then = patch(p.then)
  p.catch = patch(p.catch)
})(Promise.prototype)

// Cancelable Promise fix
window.Promise = (P => function Promise (f) {
  let cancel
  let p = new P((res, rej) => {
    cancel = (why) => rej({message: why})
    f(res, rej)
  })

  p.cancel = cancel
  return p
})(Promise)
