import React, { Component } from 'react'
import glamorous from 'glamorous'
import Avatar from 'client/components/Contacts/Avatar'

const Wrapper = glamorous.div(({
  theme: {
    primaryCardBorderColor,
    primaryCardBg
  },
  isActive
}) => ({
  position: 'relative',
  width: '100%',
  borderBottom: `1px solid ${primaryCardBorderColor}`,
  padding: '20px',
  background: primaryCardBg
}))

export default class ContactCard extends Component {
  static propTypes = {
  }

  render () {
    return (
      <Wrapper>
        <Avatar />
      </Wrapper>
    )
  }
}
