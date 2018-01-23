import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from 'client/components/Gui/Wrapper'
import ContactCard from 'client/components/Contacts/ContactCard'

const mapStateToProps = () => {
  return {
    messages: Array(100).fill({ name: 'Nick', message: 'This is a message!', timeStamp: Date.now().toString() })
  }
}
@connect(mapStateToProps, null)
export default class Chat extends Component {
  render () {
    const { messages } = this.props

    return (
      <Wrapper className='chat'>
        {
          messages.map((message, index) => <ContactCard key={index} { ...message } />)
        }
      </Wrapper>
    )
  }
}
