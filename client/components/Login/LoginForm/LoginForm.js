import React from 'react'

import { reduxForm, Field } from 'redux-form'

import glamorous, { Div } from 'glamorous'

import TextInput from 'client/components/FormComponents/TextInput'
import SubmitButton from 'client/components/FormComponents/SubmitButton'
import FormGroup from 'client/components/FormComponents/FormGroup'
import Link from 'client/components/Gui/Link'
import { Col, Row } from 'react-grid-system'

import {
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  LOGIN_SYNC_VALIDATION as validate
} from 'client/consts/forms'

const Form = glamorous.form(({ theme: { fontPrimary, colorTextPrimary, bgPrimary } }) => ({
  position: 'relative',
  margin: 0,
  padding: '20px',
  background: bgPrimary
}))

const LoginForm = (props) => {
  const { handleSubmit, submitting } = props

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
        <Row>
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
        </Row>
     </FormGroup>
      <FormGroup>
        <SubmitButton submitting={submitting}>
          LOGIN
        </SubmitButton>
      </FormGroup>
    </Form>
  )
}

export default reduxForm({
  form: 'login',
  validate
})(LoginForm)
