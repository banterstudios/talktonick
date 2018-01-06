import React from 'react'

import { reduxForm, Field } from 'redux-form'

import glamorous, { Div } from 'glamorous'

import TextInput from 'client/components/FormComponents/TextInput'
import SubmitButton from 'client/components/FormComponents/SubmitButton'
import FormGroup from 'client/components/FormComponents/FormGroup'
import Link from 'client/components/Gui/Link'
import { Col, Clearfix } from 'react-bootstrap'

import {
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER
} from 'client/consts/forms'

const Form = glamorous.form(({ theme: { fontPrimary, colorTextPrimary, bgPrimary } }) => ({
  position: 'relative',
  margin: 0,
  padding: '20px',
  background: bgPrimary
}))

const LoginForm = (props) => {
  const { handleSubmit } = props

  return (
    <Form onSubmit={handleSubmit(handleSubmit)}>
      <FormGroup>
        <Field
          tabIndex={1}
          name='email'
          type='email'
          placeholder={EMAIL_PLACEHOLDER}
          component={TextInput}
        />
      </FormGroup>
      <FormGroup modifier='sm'>
        <Field
          tabIndex={2}
          name='password'
          type='password'
          placeholder={PASSWORD_PLACEHOLDER}
          component={TextInput}
        />
      </FormGroup>
      <FormGroup modifier='lg'>
        <Clearfix>
          <Col xs={6}>
            <Div>
              <Link href='/register' modifier='sm'>
                Sign up
              </Link>
            </Div>
          </Col>
          <Col xs={6}>
            <Div textAlign='right'>
              <Link href='/forgot' modifier='sm'>
                Forgot
              </Link>
            </Div>
          </Col>
        </Clearfix>
     </FormGroup>
      <FormGroup>
        <SubmitButton>
          LOGIN
        </SubmitButton>
      </FormGroup>
    </Form>
  )
}

export default reduxForm({
  form: 'login'
})(LoginForm)
