
import React, { PureComponent } from 'react'
import { css } from 'glamor'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const enterTimeout = 200
const leaveTimeout = 200

const enter = css({
  opacity: 0,
  transform: `translate3d(20px, 0, 0)`
})

const enterActive = css({
  opacity: 1,
  transform: `translate3d(0, 0, 0)`,
  transition: `opacity ${enterTimeout}ms ease-out, transform ${enterTimeout}ms ease-out`
})

const leave = css({
  opacity: 1,
  transform: `translate3d(0, 0, 0)`
})

const leaveActive = css({
  opacity: 0,
  transform: `translate3d(20px, 0, 0)`,
  transition: `opacity ${leaveTimeout}ms ease-out, transform ${leaveTimeout}ms ease-out`
})

export default class FadeSlide extends PureComponent {
  render () {
    const { children } = this.props

    return (
      <CSSTransitionGroup
        transitionAppear
        transitionAppearTimeout={enterTimeout}
        transitionEnterTimeout={enterTimeout}
        transitionLeaveTimeout={leaveTimeout}
        transitionName={{
          appear: enter,
          appearActive: enterActive,
          enter,
          enterActive,
          leave,
          leaveActive
        }}
      >
        {children}
      </CSSTransitionGroup>
    )
  }
}
