import React, { Component } from 'react'
import glamorous from 'glamorous'

const NavbarWrapper = glamorous.nav(({ theme: { headerHeight } }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  height: headerHeight,
  width: '100%'
}))

class Navbar extends Component {
  render () {
    const { children } = this.props

    return (
      <NavbarWrapper role='navigation'>
        { children }
      </NavbarWrapper>
    )
  }
}

export default Navbar
