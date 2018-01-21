import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import LoginFormContainer from 'client/redux/containers/Login/LoginForm'

import Modal from 'client/components/Popups/Modal'
import Wrapper from 'client/components/Gui/Wrapper'
import { Redirect } from 'react-router-dom'

const mapStateToProps = ({ login: { isLoggedIn }}) => ({
  isLoggedIn
})

@connect(mapStateToProps, null)
export default class Login extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    redirect: PropTypes.string
  }

  static defaultProps = {
    redirect: '/chat'
  }

  render () {
    const { isLoggedIn, redirect } = this.props

    if (isLoggedIn) {
      return <Redirect to={{ pathname: redirect }} />
    }

    return (
      <Wrapper className='login'>
        <Modal open size='sm'>
          <LoginFormContainer form='login-form' />
        </Modal>
      </Wrapper>
    )
  }
}
