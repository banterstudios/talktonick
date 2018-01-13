import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from 'client/components/Gui/Wrapper'
import ContactCard from 'client/components/Contacts/ContactCard'

@connect(null, null)
export default class Chat extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='chat'>
        {
          [1, 2, 3, 4, 5].map((num, index) => <ContactCard key={index} />)
        }
      </Wrapper>
    )
  }
}
