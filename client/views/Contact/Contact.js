import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from 'client/components/Gui/Wrapper'

@connect(null, null)
export default class Contact extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='contact'>
          contact
      </Wrapper>
    )
  }
}
