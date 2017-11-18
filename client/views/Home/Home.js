import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from 'client/components/Gui/Wrapper'

@connect(null, null)
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

export default Home
