import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FadeSlide from 'client/components/Transitions/FadeSlide'
import glamorous from 'glamorous'

const Wrapper = glamorous.div(({ theme: { messagePrimaryColor, fontSizeMdText, fontSecondary } }) => ({
  position: 'relative',
  padding: '5px 0',
  fontFamily: fontSecondary,
  color: messagePrimaryColor,
  fontSize: fontSizeMdText
}))

export default class FormMessage extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.string
  }

  render () {
    const { children } = this.props

    return (
      <FadeSlide direction='up' isActive>
        <Wrapper>
          {children}
        </Wrapper>
      </FadeSlide>
    )
  }
}
