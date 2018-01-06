import React, { Component } from 'react'

import { connect } from 'react-redux'

import LoginForm from 'client/components/Login/LoginForm'

import Modal from 'client/components/Popups/Modal'
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

    this.state = { show: true }
  }

  stateChange = () => this.setState(({ show }) => ({ show: !show }))

  render () {
    return (
      <Wrapper className='login'>
        <Modal open={this.state.show} allowKeyboard onClick={this.stateChange} size='sm'>
          <LoginForm form='login-form' />
        </Modal>
      </Wrapper>
    )
  }
}

export default Login
