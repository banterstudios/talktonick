import React, { Component } from 'react'

import { connect } from 'react-redux'

import TextInput from 'client/components/FormComponents/TextInput'

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
        Hello login!
        <TextInput />
      </Wrapper>
    )
  }
}

export default Login
