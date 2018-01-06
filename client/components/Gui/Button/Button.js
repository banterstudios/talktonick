import React, { Component } from 'react'

import PropTypes from 'prop-types'

import glamorous from 'glamorous'

import { isFunction } from 'client/utils/objectUtils'

const StyledButton = glamorous.button(({ theme: { formBorderRadius, primaryButtonBg }, isDisabled }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '200px',
  borderRadius: formBorderRadius,
  background: primaryButtonBg,
  opacity: (isDisabled ? 0.5 : 1)
}))

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    isDisabled: PropTypes.bool
  }

  handleClick = (e) => {
    const { onClick, isDisabled } = this.props

    if (isFunction(onClick) && !isDisabled) {
      onClick()
    }
  }

  render () {
    const {
      text,
      isDisabled
    } = this.props

    return (
      <StyledButton isDisabled={isDisabled} onClick={this.handleClick}>
        {text}
      </StyledButton>
    )
  }
}
