import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from 'client/components/Gui/Wrapper'

@connect(null, null)
class Faq extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='faq'>
          faq
      </Wrapper>
    )
  }
}

export default Faq
