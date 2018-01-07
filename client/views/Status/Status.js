import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from 'client/components/Gui/Wrapper'

@connect(null, null)
class Status extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='status'>
          Status
      </Wrapper>
    )
  }
}

export default Status
