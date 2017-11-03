import React, { Component } from 'react'

import { connect } from 'react-redux'

import TextInput from 'client/components/FormComponents/TextInput'

import Wrapper from 'client/components/Gui/Wrapper'

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

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
