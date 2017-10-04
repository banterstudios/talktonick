import React, { Component } from 'react'

import { connect } from 'react-redux'

class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <section>Homepage</section>
    )
  }
}

export default connect(
  null,
  null
)(Home)
