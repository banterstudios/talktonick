import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import { isElemInView, testForPassiveScroll } from 'client/utils/domUtils'

import { throttle } from 'client/utils/commonUtils'

class InView extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    scrollCheck: PropTypes.bool,
    resizeCheck: PropTypes.bool,
    timerCheck: PropTypes.bool,
    timerDelay: PropTypes.number
  }

  static defaultProps = {
    scrollCheck: true,
    resizeCheck: true,
    timerCheck: false,
    timerDelay: 200
  }

  constructor (props) {
    super(props)

    this.state = {
      isVisible: null
    }

    this.passiveData = testForPassiveScroll() ? { passive: true } : false
    this.containerRef = null
    this.timer = null
  }

  componentDidMount () {
    this.start()
  }

  componentWillUnmount () {
    this.unBindEvents()
  }

  start = () => {
    this.bindEvents()
    this.performCheck()
  }

  storeRef = (ref) => {
    this.containerRef = ref
  }

  bindEvents = () => {
    const { scrollCheck, resizeCheck, timerCheck, timerDelay } = this.props

    if (scrollCheck) {
      window.addEventListener('scroll', this.handleEvent, this.passiveData)
    }

    if (resizeCheck) {
      window.addEventListener('resize', this.handleEvent, false)
    }

    if (timerCheck) {
      this.timer = setInterval(this.performCheck, timerDelay)
    }
  }

  unBindEvents = () => {
    const { scrollCheck, resizeCheck, timerCheck } = this.props

    if (scrollCheck) {
      window.removeEventListener('scroll', this.handleEvent, this.passiveData)
    }

    if (resizeCheck) {
      window.removeEventListener('resize', this.handleEvent, false)
    }

    if (timerCheck) {
      this.timer = clearInterval(this.timer)
    }
  }

  handleEvent = throttle(this.performCheck, 100)

  performCheck = () => {
    const { onChange } = this.props

    const isVisible = isElemInView(this.containerRef)

    if (isVisible !== this.state.isVisible) {
      this.setState({ isVisible })
      onChange && onChange(isVisible)
    }
  }

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
