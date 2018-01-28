import React, { Component } from 'react'
import glamorous from 'glamorous'
import Link from 'client/components/Gui/Link'
import { withRouter } from 'react-router-dom'
import { omit } from 'client/utils/objectUtils'

const NavLinkWrapper = glamorous.div(() => ({
  position: 'relative',
  width: '100%'
}))

const disAllowedProps = ['match', 'location', 'history', 'isActive']

@withRouter
export default class NavLink extends Component {
  checkIfActive = ({ location: { pathname = '' }, href }) => {
    return (pathname && (pathname === href))
  }

  render () {
    const {
      className,
      href,
      location,
      ...linkProps
    } = this.props

    const isActive = this.checkIfActive({ location, href })

    return (
      <NavLinkWrapper className={className}>
        <Link {...omit(linkProps, disAllowedProps)} href={href} isActive={isActive} />
      </NavLinkWrapper>
    )
  }
}
