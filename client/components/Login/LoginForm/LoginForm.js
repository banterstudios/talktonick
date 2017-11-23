import React from 'react'

import { reduxForm } from 'redux-form'

import glamorous from 'glamorous'

const Form = glamorous.form(({ theme: { fontPrimary, colorTextPrimary } }) => ({
  position: 'relative',
  fontFamily: fontPrimary,
  color: colorTextPrimary,
  margin: 0
}))

const LoginForm = (props) => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={ handleSubmit }>

    </Form>
  )
}

export default reduxForm({
  form: 'login'
})(LoginForm)
