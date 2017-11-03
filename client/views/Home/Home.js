import React, { Component } from 'react'

import { connect } from 'react-redux'

import Wrapper from 'client/components/Gui/Wrapper'

class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='home'>
          HomePage
      </Wrapper>
    )
  }
}

export default connect(
  null,
  null
)(Home)
