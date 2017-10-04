import React, { Component } from 'react'

import { connect } from 'react-redux'

class Login extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <section className='login'>
        Hello login!
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
