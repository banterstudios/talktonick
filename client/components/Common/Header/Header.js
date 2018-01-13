import React, { Component } from 'react'
import glamorous from 'glamorous'
import Navbar from 'client/components/Navigation/Navbar'
import NavLink from 'client/components/Navigation/NavLink'
import NavItem from 'client/components/Navigation/NavItem'
import Logo from 'client/components/Common/Logo'
import { MAIN_LINKS } from 'client/consts/links'

const HeaderWrapper = glamorous.header(({ theme: { headerHeight, bgPrimary, bgSecondary } }) => ({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: headerHeight,
  boxShadow: `0px 0 5px 0px ${bgPrimary}`,
  zIndex: '99',
  background: bgSecondary
}))

const FlexWrapper = glamorous.div(({ theme: { headerBgColor, headerHeight } }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0 20px'
}))

class Header extends Component {
  render () {
    return (
      <HeaderWrapper className='header'>
        <FlexWrapper>
          <Logo modifier='sm' />
            <Navbar>
              {
                MAIN_LINKS.map(({ name, link, id }) => (
                  <NavItem key={id}>
                    <NavLink href={link}>{name}</NavLink>
                  </NavItem>
                ))
              }
            </Navbar>
        </FlexWrapper>
      </HeaderWrapper>
    )
  }
}

export default Header
