import React from 'react'

import { Field, reduxForm } from 'redux-form'

import glamorous from 'glamorous'

const LoginForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>

    </form>
  )
}

export default reduxForm({
  form: 'login'
})(LoginForm)
