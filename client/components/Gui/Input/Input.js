/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */

import PropTypes from 'prop-types'

import glamorous from 'glamorous'

const Input = glamorous.input({
  border: 0,
  borderRadius: 0,
  padding: 0,
  appearance: 'none',
  backgroundColor: 'transparent',
  '&:focus, &:active': {
    outline: 'none'
  }
})

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

export default Input
