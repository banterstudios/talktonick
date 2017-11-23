import React, { Component } from 'react'
import Wrapper from 'client/components/Gui/Wrapper'
import glamorous from 'glamorous'
import { Grid, Row, Col } from 'react-bootstrap'
import Copy from 'client/components/Typography/Copy'

const HeaderWrapper = glamorous.header(({ theme: { headerBgColor, headerHeight } }) => ({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: headerHeight,
  background: headerBgColor,
  zIndex: '99'
}))

class Header extends Component {
  render () {
    return (
      <HeaderWrapper>
        <Wrapper className='header'>
          <Grid>
            <Row>
              <Col xs={2} />
              <Col xs={8}>
                <Copy>Talk To Nick</Copy>
              </Col>
              <Col xs={2} />
            </Row>
          </Grid>
        </Wrapper>
      </HeaderWrapper>
    )
  }
}

export default Header
