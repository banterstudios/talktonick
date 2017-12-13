import React, { PureComponent } from 'react'
import glamorous from 'glamorous'
import LazyImage from 'client/components/Gui/LazyImage'
import { logo } from 'client/consts/images'
import PropTypes from 'prop-types'
import { checkIfValueIsAllowedOrSetDefault } from 'client/utils/objectUtils'

const allowedModifiers = ['sm', 'md', 'lg']

const LogoWrapper = glamorous.div(({ modifier, theme: { logoSmWidth, logoSmHeight} }) => ({
  position: 'relative',
  width: modifier === 'sm' ? logoSmWidth : '20px',
  height: modifier === 'sm' ? logoSmHeight : '20px'
}))

export default class Logo extends PureComponent {
  static propTypes = {
    modifier: PropTypes.string
  }

  render () {
    const { modifier } = this.props

    return (
      <LogoWrapper modifier={checkIfValueIsAllowedOrSetDefault(modifier, allowedModifiers, 'sm')}>
        <LazyImage src={logo} />
      </LogoWrapper>
    )
  }
}
