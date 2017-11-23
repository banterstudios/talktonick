import React, { Component } from 'react'

import { connect } from 'react-redux'

import LoginForm from 'client/components/Login/LoginForm'

import Wrapper from 'client/components/Gui/Wrapper'

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

@connect(mapStateToProps, mapDispatchToProps)
class Login extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='login'>
        <LoginForm form='login-form' />
      </Wrapper>
    )
  }
}

export default Login
