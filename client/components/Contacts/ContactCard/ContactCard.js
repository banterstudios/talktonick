import React, { Component } from 'react'
import glamorous from 'glamorous'
import Avatar from 'client/components/Contacts/Avatar'
import Title from 'client/components/Typography/Title'
import Copy from 'client/components/Typography/Copy'

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

const Container = glamorous.div(() => ({
  position: 'relative',
  display: 'flex'
}))

const Col = glamorous.div(() => ({
  position: 'relative',
  width: '60px',
  flexShrink: '0'
}))

const ColFluid = glamorous.div(() => ({
  position: 'relative',
  width: '100%',
  padding: '0 20px'
}))

const Text = glamorous(Copy)(() => ({
  opacity: 0.8
}))

export default class ContactCard extends Component {
  static propTypes = {
  }

  render () {
    return (
      <Wrapper>
        <Container>
          <Col>
            <Avatar />
          </Col>
          <ColFluid>
            <VerticalAlign>
              <Title type={'h4'} style={{ marginBottom: '5px' }}>
                Name
              </Title>
              <Text>
                Snippet.
              </Text>
            </VerticalAlign>
          </ColFluid>
          <Col>

          </Col>
        </Container>
      </Wrapper>
    )
  }
}
