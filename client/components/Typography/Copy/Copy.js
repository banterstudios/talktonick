import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

const Paragraph = glamorous.p(() => ({
  position: 'relative'
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
