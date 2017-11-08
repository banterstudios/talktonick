import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { isElemInView, testForPassiveScroll } from 'client/utils/domUtils'

import { throttle } from 'client/utils/commonUtils'

class InView extends Component {
  static propTypes = {
    onVisible: PropTypes.func,
    onHidden: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.passiveData = testForPassiveScroll() ? { passive: true } : false
    this.containerRef = null
  }

  componentDidMount () {
    this.bindEvents()
  }

  componentWillUnmount () {
    this.unBindEvents()
  }

  storeRef = (ref) => {
    this.containerRef = ref
  }

  bindEvents = () => {
    window.addEventListener('scroll', this.handleEvent, this.passiveData)
    window.addEventListener('resize', this.handleEvent, false)
  }

  unBindEvents = () => {
    window.removeEventListener('scroll', this.handleEvent, this.passiveData)
    window.removeEventListener('resize', this.handleEvent, false)
  }

  handleEvent = throttle(() => {
    const { onVisible, onHidden } = this.props

    if (isElemInView(this.containerRef)) {
      onVisible && onVisible()
    } else {
      onHidden && onHidden()
    }
  }, 100)

  render () {
    const { children } = this.props

    return (
      <div ref={this.storeRef}>
        { children }
      </div>
    )
  }
}

export default InView
