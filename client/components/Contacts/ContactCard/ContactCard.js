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

const VerticalAlign = glamorous.div(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  height: '100%',
  flexDirection: 'column'
}))

export default class ContactCard extends Component {
  static propTypes = {
  }

  render () {
    return (
      <Wrapper>
        <Row>
          <Col style={{ flexShrink: '1' }}>
            <Avatar />
          </Col>
          <Col xs={10}>
            <VerticalAlign>
              <Title type={'h4'} style={{ marginBottom: '5px' }}>
                Name
              </Title>
              <Copy style={{ fontSize: '14px'}}>
                Snippet.
              </Copy>
            </VerticalAlign>
          </Col>
          <Col>
            <Avatar />
          </Col>
        </Row>
      </Wrapper>
    )
  }
}
