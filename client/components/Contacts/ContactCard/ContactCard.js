import React, { Component } from 'react'
import glamorous, { Div } from 'glamorous'
import Avatar from 'client/components/Contacts/Avatar'
import Title from 'client/components/Typography/Title'
import Copy from 'client/components/Typography/Copy'
import StatusLight from 'client/components/Contacts/StatusLight'
import { Col, Row, Container } from 'react-grid-system'

import PropTypes from 'prop-types'

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

// const Container = glamorous.div(() => ({
//   position: 'relative',
//   display: 'flex'
// }))

// const Col = glamorous.div(() => ({
//   position: 'relative',
//   width: '60px',
//   flexShrink: '0'
// }))

// const ColFluid = glamorous.div(() => ({
//   position: 'relative',
//   width: '100%',
//   padding: '0 20px'
// }))

const Text = glamorous(Copy)(() => ({
  opacity: 0.8
}))

export default class ContactCard extends Component {
  static propTypes = {
    name: PropTypes.string,
    message: PropTypes.string,
    timeStamp: PropTypes.string
  }

  render () {
    const { name, message, timeStamp } = this.props

    return (
      <Wrapper>
        <Row>
          <Col>
            <Avatar />
            <Div position='absolute' top={0} right={0}>
              <StatusLight isActive={(Math.random() * (10)) >> 0 >= 5}/>
            </Div>
          </Col>
          <Col fluid>
            <VerticalAlign>
              <Col sm={10}>
                <Title type={'h4'} style={{ marginBottom: '5px' }}>
                  {name}
                </Title>
              </Col>
              <Col sm={2}>
                <Text>
                  {timeStamp}
                </Text>
              </Col>
            </VerticalAlign>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}
