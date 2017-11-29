import React, { Component } from 'react'
import Wrapper from 'client/components/Gui/Wrapper'
import glamorous from 'glamorous'
import { Grid, Row } from 'react-bootstrap'
import Navbar from 'client/components/Navigation/Navbar'
import NavLink from 'client/components/Navigation/NavLink'
import NavItem from 'client/components/Navigation/NavItem'
import LazyImage from 'client/components/Gui/LazyImage'

let logo = ''
if (process.browser) logo = require('client/assets/images/logo.png')

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
          <LazyImage src={logo} />
          <Grid>
            <Row>
              <Navbar>
                <NavItem>
                  <NavLink href='/'>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/about'>About</NavLink>
                </NavItem>
              </Navbar>
            </Row>
          </Grid>
        </Wrapper>
      </HeaderWrapper>
    )
  }
}

export default Header
