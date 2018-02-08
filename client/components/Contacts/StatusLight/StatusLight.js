import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

const Wrapper = glamorous.div(({ theme: { bgPrimary } }) => ({
  position: 'relative',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  overflow: 'hidden',
  marginTop: '-1px',
  border: `2px solid ${bgPrimary}`
}))

const Light = glamorous.div(({
  theme: {
    inactiveStatusColor,
    activeStatusColor
  },
  isActive
}) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: isActive ? activeStatusColor : inactiveStatusColor
}))

export default class StatusLight extends PureComponent {
  static propTypes = {
    isActive: PropTypes.bool
  }

  static defaultProps = {
    isActive: false
  }

  render () {
    const { isActive } = this.props

    return (
      <Wrapper>
        <Light isActive={isActive} />
      </Wrapper>
    )
  }
}
