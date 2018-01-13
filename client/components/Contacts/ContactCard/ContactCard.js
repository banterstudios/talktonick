import React, { Component } from 'react'
import glamorous from 'glamorous'
import Avatar from 'client/components/Contacts/Avatar'
import Title from 'client/components/Typography/Title'
import Copy from 'client/components/Typography/Copy'
import { Row, Col } from 'react-grid-system'

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
        <Row>
          <Col xs={3}>
            <Avatar />
          </Col>
          <Col xs={6}>
            <Title type={'h4'}>
              Name
            </Title>
            <Copy>
              Snippet.
            </Copy>
          </Col>
          <Col xs={3}>
            <Avatar />
          </Col>
        </Row>
      </Wrapper>
    )
  }
}
