import React from 'react'

import PropTypes from 'prop-types'

import Input from 'client/components/Gui/Input'

import { Div } from 'glamorous'

import FormMessage from 'client/components/FormComponents/FormMessage'

const TextInput = (props) => {
  const {
    input,
    type,
    placeholder,
    tabIndex,
    meta: { touched, error, warning }
  } = props

  return (
    <Div position='relative' width='100%'>
      <Input {...input} type={type} placeholder={placeholder} tabIndex={tabIndex} />
      {touched && ((error && <FormMessage type='error'>{error}</FormMessage>) || (warning && <FormMessage type='warning'>{warning}</FormMessage>))}
    </Div>
  )
}

TextInput.propTypes = {
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

export default TextInput
