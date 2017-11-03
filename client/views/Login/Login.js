import React, { Component } from 'react'

import { connect } from 'react-redux'

import TextInput from 'client/components/FormComponents/TextInput'

class Login extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <section className='login'>
        Hello login!
        <TextInput />
      </section>
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
