import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

const Paragraph = glamorous.p(({ theme: { fontSecondary, colorTextPrimary } }) => ({
  position: 'relative',
  fontFamily: fontSecondary,
  color: colorTextPrimary,
  margin: 0
}))

class Copy extends PureComponent {
  static propTypes = {
    children: PropTypes.any
  }

  render () {
    const { children, ...rest } = this.props

    return (
      <Paragraph {...rest}>
        {children}
      </Paragraph>
    )
  }
}

export default Copy
