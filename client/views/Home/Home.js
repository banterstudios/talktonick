import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from 'client/components/Gui/Wrapper'
import MobilePhone from 'client/components/ThreeAnimations/MobilePhone'

@connect(null, null)
class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='home'>
        <MobilePhone />
      </Wrapper>
    )
  }
}

export default Home
