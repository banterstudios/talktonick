import React, { Component } from 'react'

import { connect } from 'react-redux'

import LoginFormContainer from 'client/redux/containers/Login/LoginForm'

import Modal from 'client/components/Popups/Modal'
import Wrapper from 'client/components/Gui/Wrapper'

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Login extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='login'>
        <Modal open size='sm'>
          <LoginFormContainer form='login-form' />
        </Modal>
      </Wrapper>
    )
  }
}
