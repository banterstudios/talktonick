import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from 'client/components/Gui/Wrapper'

@connect(null, null)
export default class Chat extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='chat'>
      </Wrapper>
    )
  }
}
