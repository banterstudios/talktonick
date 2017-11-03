import React from 'react'

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

const InputWrapper = (props) => {
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
      <Input
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

InputWrapper.propTypes = {
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

export default InputWrapper
