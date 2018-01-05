import React, { PureComponent } from 'react'
import { spring, Motion } from 'react-motion'

export default class FadeSlide extends PureComponent {
  render () {
    const { children, isActive } = this.props

    return (
      <Motion
        style={{ opacity: spring(isActive ? 1 : 0), x: spring(isActive ? 0 : 20) }}
        defaultStyle={{ opacity: 0, x: 20 }}>
        {({ opacity, x }) =>
          <span style={{ opacity, display: opacity ? 'block' : 'none', transform: `translate3d(${x}px, 0, 0)` }}>
            { children }
          </span>
        }
      </Motion>
    )
  }
}
