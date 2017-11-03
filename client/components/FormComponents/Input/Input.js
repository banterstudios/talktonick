import React from 'react'

import PropTypes from 'prop-types'

const Input = (props) => {
  const {
    type,
    name,
    value,
    onBlur,
    onFocus,
    onInput,
    onChange,
    disabled
  } = props

  return (
    <div className='input'>
      <input
        className='input__elem'
        type={type}
        name={name}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onInput={onInput}
        onChange={onChange}
        disabled={disabled}
        />
    </div>
  )
}

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
