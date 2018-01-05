import React from 'react'

import { reduxForm, Field } from 'redux-form'

import glamorous from 'glamorous'

import TextInput from 'client/components/FormComponents/TextInput'
import FormGroup from 'client/components/FormComponents/FormGroup'

import {
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER
} from 'client/consts/forms'

const Form = glamorous.form(({ theme: { fontPrimary, colorTextPrimary, bgSecondary } }) => ({
  position: 'relative',
  margin: 0,
  padding: '20px',
  background: bgSecondary
}))

const LoginForm = (props) => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Field
          tabIndex={1}
          name='email'
          type='email'
          placeholder={EMAIL_PLACEHOLDER}
          component={TextInput}
        />
      </FormGroup>

      <FormGroup>
        <Field
          tabIndex={2}
          name='password'
          type='password'
          placeholder={PASSWORD_PLACEHOLDER}
          component={TextInput}
        />
      </FormGroup>
    </Form>
  )
}

export default reduxForm({
  form: 'login'
})(LoginForm)
