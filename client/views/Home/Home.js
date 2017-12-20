import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from 'client/components/Gui/Wrapper'
import Intro from 'client/components/ThreeAnimations/Intro'

@connect(null, null)
class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='home'>
        <Intro />
      </Wrapper>
    )
  }
}

export default Home
