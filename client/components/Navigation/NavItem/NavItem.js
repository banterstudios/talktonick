import React, { Component } from 'react'
import glamorous from 'glamorous'
import FadeSlide from 'client/components/Transitions/FadeSlide'

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
        <FadeSlide>
          { children }
        </FadeSlide>
      </NavItemWrapper>
    )
  }
}

export default NavItem
