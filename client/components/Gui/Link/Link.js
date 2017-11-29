import React, { Component } from 'react'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import { Link as routerLink } from 'react-router-dom'

const getStyles = ({ theme: { ctaPrimary, ctaHighlight, fontSizeText, fontPrimary }, isActive }) => ({
  position: 'relative',
  color: (isActive ? ctaHighlight : ctaPrimary),
  fontSize: fontSizeText,
  fontFamily: fontPrimary,
  textDecoration: 'none',
  transition: 'color .4s ease-out',
  ':hover': {
    color: ctaHighlight
  }
})

const StyledLink = glamorous.a(getStyles)
const StyledRouterLink = glamorous(routerLink)(getStyles)

class Link extends Component {
  static propTypes = {
    href: PropTypes.string,
    linkType: PropTypes.string,
    target: PropTypes.string,
    children: PropTypes.any,
    isActive: PropTypes.bool
  }

  static defaultProps = {
    href: '/',
    target: '_blank',
    linkType: 'route'
  }

  renderNativeLink = ({ children, href, target }) => (
    <StyledLink href={href} target={target}>
      { children }
    </StyledLink>
  )

  renderRouterLink = ({ href, children }) => (
    <StyledRouterLink to={href}>
      { children }
    </StyledRouterLink>
  )

  render () {
    const { linkType, ...rest } = this.props

    const renderLookup = {
      native: this.renderNativeLink,
      route: this.renderRouterLink
    }

    return renderLookup[linkType] ? renderLookup[linkType](rest) : null
  }
}

export default Link