import React, { Component } from 'react'
import Wrapper from 'client/components/Gui/Wrapper'
import glamorous from 'glamorous'
import { Grid, Row } from 'react-bootstrap'
import Navbar from 'client/components/Navigation/Navbar'
import NavLink from 'client/components/Navigation/NavLink'
import NavItem from 'client/components/Navigation/NavItem'
import Logo from 'client/components/Common/Logo'

const HeaderWrapper = glamorous.header(({ theme: { headerBgColor, headerHeight } }) => ({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: headerHeight,
  background: headerBgColor,
  zIndex: '99'
}))

const LogoWrapper = glamorous.div(() => ({
  position: 'absolute',
  top: '50%',
  left: '10px',
  transform: 'translateY(-50%)'
}))

const GridWrapper = glamorous.div(({ theme: { headerHeight } }) => ({
  position: 'relative',
  padding: `0 60px`
}))

class Header extends Component {
  render () {
    return (
      <HeaderWrapper>
        <Wrapper className='header'>
          <LogoWrapper>
            <Logo modifier='sm' />
          </LogoWrapper>
          <GridWrapper>
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
          </GridWrapper>
        </Wrapper>
      </HeaderWrapper>
    )
  }
}

export default Header
