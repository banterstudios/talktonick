import React, { Component } from 'react'
import glamorous from 'glamorous'

const NavItemWrapper = glamorous.div(({ theme: { navPrimaryBg, navHighlightBg } }) => ({
  position: 'relative',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

class NavItem extends Component {
  render () {
    const { children } = this.props

    return (
      <NavItemWrapper>
        { children }
      </NavItemWrapper>
    )
  }
}

export default NavItem
