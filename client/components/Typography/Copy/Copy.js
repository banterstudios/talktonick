import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

const Paragraph = glamorous.p(({ theme: { fontPrimary, colorTextPrimary } }) => ({
  position: 'relative',
  fontFamily: fontPrimary,
  color: colorTextPrimary,
  margin: 0
}))

class Copy extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.node
    ])
  }

  render () {
    const { children } = this.props

    return (
      <Paragraph>
        {children}
      </Paragraph>
    )
  }
}

export default Copy
