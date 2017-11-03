import React, { Component } from 'react'

import { connect } from 'react-redux'

import Input from 'client/components/FormComponents/Input'

class Login extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <section className='login'>
        Hello login!
        <Input />
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
