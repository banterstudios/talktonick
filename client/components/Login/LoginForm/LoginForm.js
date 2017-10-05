import React from 'react'

import { Field, reduxForm } from 'redux-form'

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
