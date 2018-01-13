import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FadeSlide from 'client/components/Transitions/FadeSlide'
import glamorous from 'glamorous'

const Wrapper = glamorous.div(({ theme }) => ({
  position: 'relative',
  padding: '5px 0'
}))

export default class FormMessage extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.string
  }

  render () {
    const { children } = this.props

    return (
      <Wrapper>
        <FadeSlide direction='up' isActive>
          {children}
        </FadeSlide>
      </Wrapper>
    )
  }
}
