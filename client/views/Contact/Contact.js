import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from 'client/components/Gui/Wrapper'

@connect(null, null)
class Contact extends Component {
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

export default Contact
